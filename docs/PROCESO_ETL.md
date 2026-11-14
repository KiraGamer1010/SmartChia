# Proceso ETL

## Herramientas documentadas

SQL Server, SQL Server Management Studio, Visual Studio 2022 y SQL Server Integration Services (SSIS).

## Etapas descritas

1. **Extract:** obtener datos de `dbo.Mediciones`.
2. **Transform:** validar datos, revisar tipos de columna y preparar la información para integración.
3. **Load:** almacenar los datos preparados en las estructuras del Data Warehouse.

## Estado verificable

Se inició el proyecto `ETL_SmartChia` y se configuró una conexión OLE DB a `smartchia1`. La documentación indica que no se completó ni validó la ejecución integral del paquete. Por tanto, no se reporta una carga ETL exitosa ni cifras de filas cargadas por SSIS.
