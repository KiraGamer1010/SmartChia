# SmartChia API

Backend independiente de solo lectura para consultar el estado de conexión y el esquema de `dbo.Mediciones` en Azure SQL. El frontend actual permanece independiente y no recibe credenciales de base de datos.

## Requisitos

- Node.js 20 o superior
- Acceso de red desde el servicio hacia Azure SQL por TCP 1433 (o el puerto configurado)
- Un usuario de Azure SQL con conexión y permiso `VIEW DEFINITION` sobre `dbo.Mediciones` (o permiso equivalente para ver sus columnas)

## Ejecución local

Desde `api-server/`:

```bash
npm install
```

Copia `.env.example` a `.env` y rellena los valores privados. Luego inicia la API:

```bash
npm start
```

`PORT` lo establece Render automáticamente; localmente se usa el puerto 3000 si no está definido.

## Variables privadas

Configura estas variables en el entorno del servidor. No incluyas credenciales en GitHub ni en variables `VITE_*` del frontend.

| Variable | Uso |
| --- | --- |
| `AZURE_SQL_SERVER` | Host del servidor lógico, por ejemplo `servidor.database.windows.net` |
| `AZURE_SQL_DATABASE` | Base de datos; en este proyecto, `smartchia1` |
| `AZURE_SQL_USER` | Usuario SQL de solo lectura |
| `AZURE_SQL_PASSWORD` | Contraseña de ese usuario |
| `AZURE_SQL_PORT` | Puerto SQL, normalmente `1433` |
| `FRONTEND_ORIGIN` | Origen HTTPS exacto del frontend, sin ruta ni `/` final |

La conexión exige TLS (`encrypt: true`) y no confía en certificados de servidor no verificados. La API valida que todas las variables estén presentes al arrancar.

## Endpoints

- `GET /` — estado básico del servicio.
- `GET /api/health` — realiza `SELECT 1` contra Azure SQL. Devuelve HTTP 503 si la base de datos no está disponible.
- `GET /api/schema` — lee nombres y tipos de columnas de `dbo.Mediciones` desde `INFORMATION_SCHEMA.COLUMNS`. Si la consulta falla, devuelve HTTP 503 sin exponer detalles de conexión.

No hay rutas para insertar, modificar o borrar filas y no se devuelven filas de mediciones.

## Despliegue en Render

Crea un **Web Service** conectado al repositorio:

- **Repository:** `KiraGamer1010/SmartChia`
- **Root Directory:** `api-server`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

En **Environment** del servicio configura las seis variables de la tabla anterior. Mantén `AZURE_SQL_PASSWORD` como secreto de Render y establece `FRONTEND_ORIGIN` con el dominio de producción del frontend.

Render define `PORT` para el proceso web; no hace falta agregarlo como variable privada.

## Firewall de Azure SQL

En Azure Portal, abre el servidor lógico que aloja `smartchia1` y añade reglas de firewall para las IPs de salida del Web Service. En Render, consulta **Connect → Outbound** en los detalles del servicio y permite los rangos CIDR indicados para la región del servicio. Los rangos compartidos de Render pueden variar con el tiempo; si necesitas una lista estable más estrecha, configura IPs de salida dedicadas de Render y permite esas direcciones en Azure. No habilites `Allow Azure services and resources to access this server` como sustituto: Render no es un servicio que deba tratarse como parte de la red confiable de tu suscripción Azure.

Verifica que el firewall local o de red permita la salida TCP hacia el puerto de Azure SQL configurado. Tras guardar las reglas, espera su propagación y revisa `GET /api/health` en la URL de Render.

Para reducir permisos, usa una cuenta SQL separada para esta API. Las rutas iniciales solo comprueban la conexión y leen `INFORMATION_SCHEMA.COLUMNS`; no leen filas de mediciones. Si más adelante se implementan rutas de lectura de datos, concede `SELECT` solo entonces y solo sobre los objetos requeridos. No concedas permisos de escritura, modificación o eliminación.

## Integración del frontend

Primero despliega la API y confirma el esquema devuelto por `/api/schema`. La conexión todavía no alimenta cifras, estadísticas ni animaciones del portal; eso se implementará después de verificar el esquema real.
