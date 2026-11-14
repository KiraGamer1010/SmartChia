# SmartChia PGC

Portal académico para documentar el proyecto SmartChia: monitoreo de variables asociadas al agua, almacenamiento relacional, modelo dimensional, validaciones y conocimientos derivados.

## Fuente y alcance

El contenido se construyó a partir de los PDF `SmartChia_informe_tecnico.pdf` y `MER_ETL_DW_corregido.pdf` incluidos en el repositorio. Los informes registran 1.501.749 filas en `dbo.Mediciones` (1.500.000 simuladas y 1.749 reales), un período del 16 de octubre al 11 de noviembre de 2026, cuatro categorías de sensores y un esquema dimensional con `dw.FactMediciones`, `dw.DimFecha`, `dw.DimSensor` y `dw.DimDispositivo`.

Los documentos no contienen el DDL ni el diccionario completo de columnas. Por eso, el diagrama relacional limita sus vínculos a los que la documentación identifica. El ETL SSIS se inició, pero su ejecución completa no está validada. El dashboard Power BI se integra mediante una URL configurada aparte; no se presentan gráficos de demostración como resultados.

## Tecnologías

- React y TypeScript
- Vite
- Lucide React
- CSS responsive propio

El repositorio no requería una aplicación web antes de esta implementación. Se adoptó React + TypeScript + Vite como base ligera. No se añadieron Tailwind, React Router ni Recharts: el portal usa navegación por secciones y no genera visualizaciones analíticas falsas.

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

Usa la URL de inserción aprobada para el público y configura permisos en Power BI. Las URL seguras pueden requerir inicio de sesión y licencia. No incluyas tokens, secretos ni credenciales en variables `VITE_*`: Vite las expone al navegador. Los escenarios de Power BI Embedded que necesitan tokens deben resolver la autenticación en un backend.

## Compilación

```bash
npm run build
npm run preview
```

La salida se genera en `dist/`.

## Despliegue

El proyecto está preparado para Vercel y Netlify. Conecta el repositorio, instala dependencias con `npm install` y usa `npm run build`; la carpeta de salida es `dist`. Configura `VITE_POWERBI_EMBED_URL` en el panel de variables del proveedor antes de compilar. Vercel usa `vercel.json`; Netlify usa `public/_redirects` para rutas SPA.

Consulta [docs/DESPLIEGUE.md](docs/DESPLIEGUE.md).
