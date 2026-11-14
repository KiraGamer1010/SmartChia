# Arquitectura SmartChia

## Componentes documentados

- Sensores: turbidez, sólidos disueltos (TDS), movimiento y distancia ultrasónica.
- Base operacional `smartchia1` en Microsoft SQL Azure.
- Tablas operacionales: `dbo.Dispositivos`, `dbo.Sensores`, `dbo.TiposSensor`, `dbo.Mediciones` y `dbo.SmartChiaLecturas`.
- Data Warehouse en esquema `dw`: `FactMediciones`, `DimFecha`, `DimSensor` y `DimDispositivo`.
- Relación dimensional por `FechaKey`, `SensorKey` y `DispositivoKey`.
- Herramientas: SQL Server Management Studio, Visual Studio 2022 y SSIS seleccionado para ETL.

## Flujo conceptual

Sensores → captura → almacenamiento operacional → extracción y preparación → esquema dimensional → Power BI → conocimiento y decisiones.

La documentación indica que el proyecto `ETL_SmartChia` y una conexión OLE DB se iniciaron. No acredita una ejecución completa y validada ni una carga final. Power BI se presenta como integración prevista; la URL del informe no está incluida en los archivos fuente.

## Diagrama

El portal diferencia componentes documentados de pasos conceptuales o pendientes. La arquitectura no afirma telemetría en tiempo real, automatización de ETL ni publicación efectiva del informe.
