# Dashboard Power BI

El sitio incorpora un `iframe` para mostrar el informe definido en `VITE_POWERBI_EMBED_URL`. Mientras se establece la conexión, aparece un mensaje cordial en el espacio del panel.

## Configuración

1. Obtener la URL de inserción autorizada del reporte real desde Power BI.
2. Configurar `VITE_POWERBI_EMBED_URL` localmente o en el hosting.
3. Volver a compilar el sitio.
4. Confirmar permisos de visualización y licenciamiento con el propietario del informe.

Las variables `VITE_*` son visibles en el navegador; aquí se utiliza únicamente la URL del informe. Para escenarios con autenticación mediante tokens, la emisión de credenciales debe gestionarse desde un backend.

## Contenido del panel

KPI: mediciones totales, reales, simuladas, porcentaje real y cantidad de categorías de sensores.

Visualizaciones: mediciones por tipo, evolución temporal, registros reales/simulados; cruces por sensor, fecha y procedencia; análisis multivariado de fecha, tipo de sensor y dispositivo. Filtros previstos: rango de fechas, sensor, dispositivo, tipo de registro y origen.

El panel está listo para recibir el informe oficial de SmartChia. Al vincular su URL autorizada y su modelo de datos, se podrán consultar estos indicadores, filtros y visualizaciones.
