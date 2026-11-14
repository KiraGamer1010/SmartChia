# Análisis de datos y conocimiento

## Cifras documentadas

| Métrica | Valor |
| --- | ---: |
| Mediciones | 1.501.749 |
| Reales | 1.749 (0,1165%) |
| Simuladas | 1.500.000 (99,8835%) |
| Período | 16 oct–11 nov 2026 |
| Categorías de sensor | 4 |

## Consultas descritas en los anexos

El documento técnico propone consultas para contar mediciones por sensor, clasificar su origen, calcular promedios por tipo y revisar el volumen diario. Estas consultas permiten ampliar el análisis con resultados calculados directamente desde los datos.

## Conocimientos documentados

1. **Procedencia:** el conjunto está dominado por registros simulados.
2. **Volumen:** el período reúne 1.501.749 filas. La consulta diaria permite explorar cómo se distribuyen en el tiempo.
3. **Diversidad:** hay cuatro categorías con significados diferentes.
4. **Almacenamiento:** el modelo relacional operacional y el esquema dimensional organizan propósitos distintos.
5. **Análisis multidimensional:** fecha, sensor y dispositivo son ejes de consulta del modelo.

## Validaciones reportadas

`DBCC CHECKCONSTRAINTS WITH ALL_CONSTRAINTS` no reportó infracciones; los hechos corresponden con las dimensiones y las filas coinciden con los identificadores distintos. Los análisis de valores faltantes, duplicados y atípicos pueden complementar estas validaciones estructurales.
