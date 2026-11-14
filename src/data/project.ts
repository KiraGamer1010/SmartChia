export const project = {
  total: 1_501_749,
  simulated: 1_500_000,
  real: 1_749,
  start: '16 oct 2026',
  end: '11 nov 2026',
  sensors: [
    { name: 'Turbidez', unit: 'NTU', type: 'Variable física', icon: '◉', description: 'La turbidez expresa la presencia de partículas que dispersan la luz en el agua. En SmartChia, sus registros permiten consultar los cambios en el tiempo.', role: 'Observar cambios de turbidez y consultar mediciones históricas.', note: 'La descripción técnica del sensor se puede ampliar con la ficha del dispositivo.' },
    { name: 'Sólidos disueltos (TDS)', unit: 'ppm', type: 'Variable física', icon: '⌁', description: 'Los sólidos disueltos totales (TDS) expresan una característica distinta de la turbidez y se interpretan con su propia unidad y contexto.', role: 'Consultar variaciones en la concentración reportada de sólidos disueltos.', note: 'La ficha técnica del sensor puede completar la descripción de su rango y calibración.' },
    { name: 'Movimiento', unit: 'Estado', type: 'Evento', icon: '⌖', description: 'Registra la detección o el estado de movimiento y aporta información sobre la actividad del dispositivo.', role: 'Apoyar la supervisión de actividad o eventos asociados al dispositivo.', note: 'La ficha técnica puede ampliar la marca, el modelo y la definición de estados.' },
    { name: 'Distancia ultrasónica', unit: 'cm', type: 'Medición indirecta', icon: '↕', description: 'Estima la distancia a partir del tiempo de retorno de ondas ultrasónicas. Según el montaje, sirve como referencia de nivel o posición.', role: 'Registrar distancias en el tiempo para observar cambios de posición o nivel.', note: 'Aporta contexto sobre nivel o posición; la ficha técnica puede precisar el montaje y el rango de medición.' },
  ],
  concepts: [
    ['Ciudad inteligente', 'Uso coordinado de tecnologías y datos para comprender y gestionar sistemas urbanos. En SmartChia enmarca el monitoreo y el uso responsable de información ambiental.'],
    ['Gestión del conocimiento', 'Proceso de convertir datos e información en conocimiento útil para compartir y decidir. El proyecto documenta ese recorrido desde lecturas hasta hallazgos y acciones propuestas.'],
    ['Big Data', 'Prácticas y tecnologías para almacenar, preparar y analizar conjuntos de datos de volumen, velocidad o variedad relevantes. SmartChia explora el volumen y la organización de mediciones.'],
    ['Internet de las cosas (IoT)', 'Red de objetos físicos conectados que capturan o intercambian datos. Los sensores de SmartChia son fuentes de mediciones o eventos.'],
    ['Sensores', 'Dispositivos que convierten una condición o evento en una señal registrable. Cada categoría de SmartChia tiene significado y unidad propios.'],
    ['Calidad del agua', 'Conjunto de características físicas, químicas y biológicas del agua. SmartChia sigue algunas de estas variables para facilitar su observación y consulta.'],
    ['Base de datos relacional', 'Organiza información en tablas vinculadas por claves y reglas de integridad. smartchia1 registra dispositivos, sensores y mediciones.'],
    ['Data Warehouse', 'Almacén estructurado para consultas analíticas e históricas. El esquema dw del proyecto presenta una tabla de hechos y dimensiones.'],
    ['Modelo dimensional', 'Organización analítica que separa hechos medibles y dimensiones descriptivas para facilitar filtros y agregaciones.'],
    ['ETL', 'Extracción, transformación y carga de datos desde fuentes operacionales hacia un destino analítico. En SmartChia, SSIS es la herramienta elegida para conectar las fuentes con el almacén analítico.'],
    ['Business Intelligence', 'Métodos y herramientas para explorar datos mediante indicadores e informes que apoyan decisiones.'],
    ['Power BI', 'Plataforma de Microsoft para modelar, visualizar y compartir análisis. Este sitio ofrece un espacio listo para el informe de SmartChia.'],
    ['CRISP-DM', 'Proceso de minería de datos organizado en comprensión del negocio, comprensión de datos, preparación, modelado, evaluación y despliegue. En SmartChia, las fases orientan el trabajo desde la comprensión del negocio hasta la evaluación de los datos.'],
  ] as const,
}

export const navItems = [
  ['inicio', 'Inicio'], ['proyecto', 'Proyecto'], ['sensores', 'Sensores'], ['arquitectura', 'Arquitectura'],
  ['datos', 'Datos y modelos'], ['etl', 'Proceso ETL'], ['dashboard', 'Dashboard'], ['conocimientos', 'Conocimientos'],
  ['decisiones', 'Decisiones'], ['metodologia', 'Metodología'], ['resultados', 'Resultados'], ['referencias', 'Referencias'],
] as const
