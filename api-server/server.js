import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import sql from 'mssql';

function readConfig() {
  const required = [
    'AZURE_SQL_SERVER',
    'AZURE_SQL_DATABASE',
    'AZURE_SQL_USER',
    'AZURE_SQL_PASSWORD',
    'AZURE_SQL_PORT',
    'FRONTEND_ORIGIN',
  ];
  const missing = required.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  const port = Number(process.env.AZURE_SQL_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('AZURE_SQL_PORT must be an integer between 1 and 65535.');
  }

  let frontendOrigin;
  try {
    const parsedOrigin = new URL(process.env.FRONTEND_ORIGIN);
    if (!['http:', 'https:'].includes(parsedOrigin.protocol) || parsedOrigin.origin !== process.env.FRONTEND_ORIGIN) {
      throw new Error();
    }
    frontendOrigin = parsedOrigin.origin;
  } catch {
    throw new Error('FRONTEND_ORIGIN must be an exact HTTP or HTTPS origin without a path or trailing slash.');
  }

  return {
    sql: {
      server: process.env.AZURE_SQL_SERVER.trim(),
      database: process.env.AZURE_SQL_DATABASE.trim(),
      user: process.env.AZURE_SQL_USER.trim(),
      password: process.env.AZURE_SQL_PASSWORD,
      port,
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      connectionTimeout: 15000,
      requestTimeout: 15000,
    },
    frontendOrigin,
  };
}

let config;
try {
  config = readConfig();
} catch (error) {
  console.error(`Configuration error: ${error.message}`);
  process.exit(1);
}

let poolPromise;
function getPool() {
  if (!poolPromise) {
    const pool = new sql.ConnectionPool(config.sql);
    pool.on('error', () => {
      // Avoid logging driver errors because they can contain connection details.
      console.error('Azure SQL connection pool reported an error.');
    });
    poolPromise = pool.connect().catch((error) => {
      poolPromise = undefined;
      throw error;
    });
  }
  return poolPromise;
}

const app = express();
app.disable('x-powered-by');
app.use(cors({
  origin(origin, callback) {
    callback(null, !origin || origin === config.frontendOrigin);
  },
  methods: ['GET'],
}));

app.get('/', (_request, response) => {
  response.json({ service: 'SmartChia API', status: 'ok' });
});

app.get('/api/health', async (_request, response) => {
  try {
    const pool = await getPool();
    await pool.request().query('SELECT 1 AS connection_ok');
    response.json({ status: 'ok', database: 'connected' });
  } catch {
    response.status(503).json({ status: 'error', database: 'unavailable' });
  }
});

app.get('/api/schema', async (_request, response) => {
  try {
    const pool = await getPool();
    const result = await pool.request()
      .input('schemaName', sql.NVarChar(128), 'dbo')
      .input('tableName', sql.NVarChar(128), 'Mediciones')
      .query(`
        SELECT
          COLUMN_NAME AS columnName,
          DATA_TYPE AS dataType,
          CHARACTER_MAXIMUM_LENGTH AS maxLength,
          NUMERIC_PRECISION AS precision,
          NUMERIC_SCALE AS scale,
          IS_NULLABLE AS isNullable
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = @schemaName
          AND TABLE_NAME = @tableName
        ORDER BY ORDINAL_POSITION;
      `);

    response.json({
      schema: 'dbo',
      table: 'Mediciones',
      columns: result.recordset,
    });
  } catch {
    response.status(503).json({ error: 'Schema is temporarily unavailable.' });
  }
});

app.use((_request, response) => {
  response.status(404).json({ error: 'Not found.' });
});

app.use((_error, _request, response, _next) => {
  response.status(500).json({ error: 'Internal server error.' });
});

const port = Number(process.env.PORT) || 3000;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`SmartChia API listening on port ${port}.`);
});

async function shutDown() {
  server.close(async () => {
    if (poolPromise) {
      try {
        const pool = await poolPromise;
        await pool.close();
      } catch {
        // The service is already shutting down; do not expose connection details.
      }
    }
    process.exit(0);
  });
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
