export const project = {
  total: 1_501_749,
  simulated: 1_500_000,
  real: 1_749,
  start: '16 oct 2026',
  end: '11 nov 2026',
  sensors: [
    { name: 'Turbidez', unit: 'NTU', type: 'Variable física', icon: '◉', description: 'Describe la presencia de partículas que dispersan la luz en el agua. El proyecto registra el valor atribuido a esta variable para revisar su comportamiento temporal.', role: 'Observar cambios de turbidez y consultar mediciones históricas.', note: 'La documentación confirma la unidad NTU; no aporta marca, modelo, rango ni precisión del sensor.' },
    { name: 'Sólidos disueltos (TDS)', unit: 'ppm', type: 'Variable física', icon: '⌁', description: 'Representa el valor reportado de sólidos disueltos totales. Es una medida distinta de la turbidez y debe interpretarse con su propia unidad y contexto.', role: 'Consultar variaciones en la concentración reportada de sólidos disueltos.', note: 'La documentación confirma ppm; no especifica modelo, rango ni método de calibración.' },
    { name: 'Movimiento', unit: 'Estado', type: 'Evento', icon: '⌖', description: 'Indica detección o estado de movimiento; produce información de evento y no una medición fisicoquímica del agua.', role: 'Apoyar la supervisión de actividad o eventos asociados al dispositivo.', note: 'No se documentan marca, modelo, umbral ni definición de estados.' },
    { name: 'Distancia ultrasónica', unit: 'cm', type: 'Medición indirecta', icon: '↕', description: 'Usa el tiempo de retorno de ondas sonoras para estimar una distancia. Puede aportar contexto de nivel o posición, según el montaje.', role: 'Registrar distancias en el tiempo para observar cambios de posición o nivel.', note: 'No mide directamente calidad del agua; no se reportan montaje, rango ni precisión.' },
  ],
  concepts: [
    ['Ciudad inteligente', 'Uso coordinado de tecnologías y datos para comprender y gestionar sistemas urbanos. En SmartChia enmarca el monitoreo y el uso responsable de información ambiental.'],
    ['Gestión del conocimiento', 'Proceso de convertir datos e información en conocimiento útil para compartir y decidir. El proyecto documenta ese recorrido desde lecturas hasta hallazgos y acciones propuestas.'],
    ['Big Data', 'Prácticas y tecnologías para almacenar, preparar y analizar conjuntos de datos de volumen, velocidad o variedad relevantes. SmartChia explora el volumen y la organización de mediciones.'],
    ['Internet de las cosas (IoT)', 'Red de objetos físicos conectados que capturan o intercambian datos. Los sensores de SmartChia son fuentes de mediciones o eventos.'],
    ['Sensores', 'Dispositivos que convierten una condición o evento en una señal registrable. Cada categoría de SmartChia tiene significado y unidad propios.'],
    ['Calidad del agua', 'Conjunto de características físicas, químicas y biológicas del agua. Las variables documentadas son parciales y no bastan para certificar potabilidad ni emitir un diagnóstico oficial.'],
    ['Base de datos relacional', 'Organiza información en tablas vinculadas por claves y reglas de integridad. smartchia1 registra dispositivos, sensores y mediciones.'],
    ['Data Warehouse', 'Almacén estructurado para consultas analíticas e históricas. El esquema dw del proyecto presenta una tabla de hechos y dimensiones.'],
    ['Modelo dimensional', 'Organización analítica que separa hechos medibles y dimensiones descriptivas para facilitar filtros y agregaciones.'],
    ['ETL', 'Extracción, transformación y carga de datos desde fuentes operacionales hacia un destino analítico. En SmartChia, SSIS se documenta como diseño iniciado, no como proceso integral validado.'],
    ['Business Intelligence', 'Métodos y herramientas para explorar datos mediante indicadores e informes que apoyan decisiones.'],
    ['Power BI', 'Plataforma de Microsoft para modelar, visualizar y compartir análisis. Este sitio reserva un espacio para integrar el informe real cuando se configure su URL.'],
    ['CRISP-DM', 'Proceso de minería de datos organizado en comprensión del negocio, comprensión de datos, preparación, modelado, evaluación y despliegue. El informe evidencia las primeras cinco fases con alcance académico.'],
  ] as const,
}

export const navItems = [
  ['inicio', 'Inicio'], ['proyecto', 'Proyecto'], ['sensores', 'Sensores'], ['arquitectura', 'Arquitectura'],
  ['datos', 'Datos y modelos'], ['etl', 'Proceso ETL'], ['dashboard', 'Dashboard'], ['conocimientos', 'Conocimientos'],
  ['decisiones', 'Decisiones'], ['metodologia', 'Metodología'], ['resultados', 'Resultados'], ['referencias', 'Referencias'],
] as const
