# SmartChia PGC

Portal académico para documentar el proyecto SmartChia: monitoreo de variables asociadas al agua, almacenamiento relacional, modelo dimensional, validaciones y conocimientos derivados.

## Fuente y alcance

El contenido se construyó a partir de los PDF `SmartChia_informe_tecnico.pdf` y `MER_ETL_DW_corregido.pdf` incluidos en el repositorio. Los informes registran 1.501.749 filas en `dbo.Mediciones` (1.500.000 simuladas y 1.749 reales), un período del 16 de octubre al 11 de noviembre de 2026, cuatro categorías de sensores y un esquema dimensional con `dw.FactMediciones`, `dw.DimFecha`, `dw.DimSensor` y `dw.DimDispositivo`.

El modelo relacional resume las tablas y relaciones descritas en los informes; el diccionario de datos puede ampliar el detalle de columnas. El flujo ETL parte de una conexión OLE DB a `smartchia1` y se integra con el almacén analítico al establecer el enlace con el esquema `dw`. El dashboard está listo para recibir la URL autorizada del informe de Power BI.

## Tecnologías

- React y TypeScript
- Vite
- Lucide React
- CSS responsive propio

El portal se desarrolló con React, TypeScript y Vite. La navegación por secciones mantiene el contenido académico en un recorrido claro; el panel de Power BI recibe el informe oficial mediante una variable de entorno.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

## Estructura

```text
src/
  components/        Encabezados reutilizables
  data/project.ts    Datos documentados y navegación
  sections/          Secciones modulares del portal
  App.tsx            Navegación y composición del portal
  main.tsx           Entrada React
  styles.css         Diseño responsive y accesibilidad visual
public/
  favicon.svg
  _redirects         Fallback SPA de Netlify
docs/
  ARQUITECTURA.md
  MODELO_DE_DATOS.md
  SENSORES.md
  PROCESO_ETL.md
  ANALISIS_DE_DATOS.md
  DASHBOARD.md
  DESPLIEGUE.md
```

## Power BI

1. Copia `.env.example` como `.env.local`.
2. Define `VITE_POWERBI_EMBED_URL` con la URL proporcionada por Power BI para el informe real.
3. Reinicia el servidor de desarrollo o genera nuevamente la compilación.

Ejemplo de `.env.local`:

```dotenv
VITE_POWERBI_EMBED_URL=https://app.powerbi.com/reportEmbed?reportId=...
```

Usa la URL de inserción aprobada para el público y configura permisos en Power BI. Las URL seguras pueden requerir inicio de sesión y licencia. Las variables `VITE_*` son visibles desde el navegador; reserva este espacio para la URL pública o autorizada del informe y guarda cualquier credencial únicamente en un backend seguro. Los escenarios de Power BI Embedded que necesitan tokens deben resolver la autenticación en un backend.

## Compilación

```bash
npm run build
npm run preview
```

La salida se genera en `dist/`.

## Despliegue

El proyecto está preparado para Vercel y Netlify. Conecta el repositorio, instala dependencias con `npm install` y usa `npm run build`; la carpeta de salida es `dist`. Configura `VITE_POWERBI_EMBED_URL` en el panel de variables del proveedor antes de compilar. Vercel usa `vercel.json`; Netlify usa `public/_redirects` para rutas SPA.

Consulta [docs/DESPLIEGUE.md](docs/DESPLIEGUE.md).

## API de Azure SQL

El backend independiente de solo lectura está en `api-server/`. Para configurarlo y desplegarlo como Web Service en Render, consulta [api-server/README.md](api-server/README.md). Sus credenciales se configuran únicamente en el entorno privado del servicio y no se exponen al frontend.
