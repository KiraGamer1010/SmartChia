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

El documento técnico incluye scripts para conteo por sensor, clasificación por tipo y origen, promedios por tipo y conteo diario. Los anexos presentan los scripts, pero no todos incluyen resultados tabulares; este portal no inventa distribuciones, tendencias ni estadísticos.

## Conocimientos documentados

1. **Procedencia:** el conjunto está dominado por registros simulados.
2. **Volumen:** el período contiene 1.501.749 filas; no se publican aquí conteos diarios.
3. **Diversidad:** hay cuatro categorías con significados diferentes.
4. **Almacenamiento:** el modelo relacional operacional y el esquema dimensional organizan propósitos distintos.
5. **Análisis multidimensional:** fecha, sensor y dispositivo son ejes de consulta del modelo.

## Validaciones reportadas

`DBCC CHECKCONSTRAINTS WITH ALL_CONSTRAINTS` sin infracciones reportadas; correspondencia de hechos con dimensiones; coincidencia entre filas e identificadores distintos. No se publican tasas de nulos, duplicados ni calidad estadística.
