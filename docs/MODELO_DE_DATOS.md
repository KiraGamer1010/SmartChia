# Modelo de datos

## Modelo operacional

Base `smartchia1`, tecnología Microsoft SQL Azure. Se documentan estas entidades:

| Tabla | Función documentada |
| --- | --- |
| `dbo.Dispositivos` | Información de los dispositivos |
| `dbo.Sensores` | Sensores asociados a dispositivos |
| `dbo.TiposSensor` | Categorías y unidades de los sensores |
| `dbo.Mediciones` | Mediciones procesadas; contiene `TipoRegistro` |
| `dbo.SmartChiaLecturas` | Lecturas originales del módulo |

Relaciones identificadas en el informe: sensores con dispositivos, sensores con tipos de sensor y mediciones con sensores. No se dispone del DDL ni del diccionario completo de columnas en los archivos revisados; no se atribuyen nombres de claves o columnas a las tablas operacionales.

## Volumen y procedencia

- Total en `dbo.Mediciones`: 1.501.749
- Simulados: 1.500.000 (99,8835%)
- Reales: 1.749 (0,1165%)
- Período documentado: 16 de octubre al 11 de noviembre de 2026
- El informe menciona una distribución cercana a 375.000 mediciones por categoría de sensor.

Las filas simuladas no son mediciones reales de campo.

## Modelo dimensional

Esquema `dw`, patrón estrella:

- `dw.FactMediciones`: 1.501.749 filas y 1.501.749 `IdMedicion` distintos. Granularidad: una fila por medición individual. Incluye `FechaKey`, `SensorKey`, `DispositivoKey`; `Cantidad` representa una unidad por fila.
- `dw.DimFecha`: conectada mediante `FechaKey`.
- `dw.DimSensor`: conectada mediante `SensorKey`.
- `dw.DimDispositivo`: conectada mediante `DispositivoKey`.

Las validaciones documentadas reportan correspondencia dimensional completa. No se inventa el detalle de columnas descriptivas de las dimensiones.
