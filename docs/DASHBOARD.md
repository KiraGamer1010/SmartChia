# Dashboard Power BI

El sitio incorpora un `iframe` para la URL definida en `VITE_POWERBI_EMBED_URL`. Si la variable está vacía, se muestra una guía sin gráficos ficticios.

## Configuración

1. Obtener la URL de inserción autorizada del reporte real desde Power BI.
2. Configurar `VITE_POWERBI_EMBED_URL` localmente o en el hosting.
3. Volver a compilar el sitio.
4. Confirmar permisos de visualización y licenciamiento con el propietario del informe.

Las variables `VITE_*` son públicas en el navegador. No colocar secretos ni tokens en ellas. Para escenarios que usan tokens, implementar autenticación y emisión de tokens en backend.

## Indicadores y análisis por construir en Power BI

KPI: mediciones totales, reales, simuladas, porcentaje real y cantidad de categorías de sensores.

Visualizaciones: mediciones por tipo, evolución temporal, registros reales/simulados; cruces por sensor, fecha y procedencia; análisis multivariado de fecha, tipo de sensor y dispositivo. Filtros previstos: rango de fechas, sensor, dispositivo, tipo de registro y origen.

Estos elementos son una especificación. El repositorio no incluye un informe `.pbix`, una URL Power BI ni datos tabulares exportados para calcular las distribuciones.
