# Arquitectura SmartChia

## Componentes documentados

- Sensores: turbidez, sólidos disueltos (TDS), movimiento y distancia ultrasónica.
- Base operacional `smartchia1` en Microsoft SQL Azure.
- Tablas operacionales: `dbo.Dispositivos`, `dbo.Sensores`, `dbo.TiposSensor`, `dbo.Mediciones` y `dbo.SmartChiaLecturas`.
- Data Warehouse en esquema `dw`: `FactMediciones`, `DimFecha`, `DimSensor` y `DimDispositivo`.
- Relación dimensional por `FechaKey`, `SensorKey` y `DispositivoKey`.
- Herramientas: SQL Server Management Studio, Visual Studio 2022 y SSIS seleccionado para ETL.

## Flujo de información

Sensores → captura → almacenamiento operacional → extracción y preparación → esquema dimensional → Power BI → conocimiento y decisiones.

El proyecto `ETL_SmartChia` cuenta con una conexión OLE DB a `smartchia1`. Al enlazar el flujo con el esquema `dw`, Power BI podrá consultar el modelo analítico mediante la URL autorizada del informe.

## Diagrama

El diagrama reúne los componentes descritos en el proyecto y muestra el recorrido de la información hasta el análisis.
