# Despliegue

## Compilar

```bash
npm install
npm run build
```

Salida estática: `dist/`.

## Vercel

Importa el repositorio en Vercel. Build command: `npm run build`; output directory: `dist`. Configura `VITE_POWERBI_EMBED_URL` como variable de entorno antes de compilar. `vercel.json` dirige las rutas al punto de entrada de la SPA.

## Netlify

Conecta el repositorio. Build command: `npm run build`; publish directory: `dist`. Configura la variable Power BI. `public/_redirects` proporciona fallback SPA.

## Verificación antes de publicar

- Probar navegación y diseño en anchos móvil y escritorio.
- Si se configura Power BI, comprobar permisos de acceso, altura del informe, inicio de sesión y pantalla completa.
- Confirmar metadatos y favicon.
- Al completar la publicación, registrar la URL del sitio para compartirla con el equipo del proyecto.
