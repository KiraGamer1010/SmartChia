# Proceso ETL

## Herramientas documentadas

SQL Server, SQL Server Management Studio, Visual Studio 2022 y SQL Server Integration Services (SSIS).

## Etapas descritas

1. **Extract:** obtener datos de `dbo.Mediciones`.
2. **Transform:** validar datos, revisar tipos de columna y preparar la información para integración.
3. **Load:** almacenar los datos preparados en las estructuras del Data Warehouse.

## Integración de datos

El proyecto `ETL_SmartChia` cuenta con una conexión OLE DB a `smartchia1`. La conexión con el esquema `dw` permitirá completar el recorrido desde la extracción hasta la carga y consultar las mediciones desde el modelo analítico.
