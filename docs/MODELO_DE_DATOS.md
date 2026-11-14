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

El informe describe las relaciones entre sensores y dispositivos, sensores y tipos de sensor, y mediciones y sensores. El diagrama presenta esta vista general; el diccionario de datos permite añadir nombres de columnas y claves.

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

Las validaciones documentadas reportan correspondencia dimensional completa. El diagrama se centra en las claves y relaciones principales de cada dimensión.
