/* ==========================================================
   PROJECTS.JS · TUS DATOS
   Este es el archivo que más vas a editar.

   Para AGREGAR un proyecto: copia un bloque completo { ... },
   pégalo al final de la lista (con una coma entre bloques) y
   cambia los textos. No hay que tocar HTML ni CSS.

   Para ELIMINAR uno: borra su bloque completo.

   Campos:
   - id        → nombre único, sin espacios ni tildes
   - category  → etiqueta superior de la tarjeta
   - title     → título del proyecto
   - summary   → descripción de una línea para la tarjeta
   - tags      → tecnologías usadas
   - image     → ruta de la imagen, ej: "assets/img/mi-proyecto.jpg"
                 (déjalo en null para mostrar un recuadro vacío)
   - imageAlt  → descripción de la imagen (para accesibilidad)
   - metrics   → cifras destacadas del modal (puedes poner de 0 a 3)
   - context / approach / tools / results → textos de la ficha
   - links     → enlaces; si url está vacía ("") el enlace no se muestra
   ========================================================== */

const PROJECTS = [
  {
    id: "vision-transfer-learning",
    category: "Visión computacional",
    title: "Clasificación de imágenes con transfer learning",
    summary:
      "Clasificador basado en redes convolucionales preentrenadas, adaptado mediante fine-tuning a un conjunto de datos específico.",
    tags: ["Python", "Deep Learning", "Transfer Learning"],
    image: null,
    imageAlt: "Diagrama del pipeline de clasificación de imágenes",
    metrics: [
      { value: "XX%", label: "precisión" },
      { value: "XX", label: "métrica 2" },
      { value: "XX", label: "métrica 3" }
    ],
    context:
      "Describe qué problema quieres resolver con este clasificador, qué tipo de imágenes usas y por qué importa en un contexto industrial.",
    approach:
      "Explica cómo lo abordaste: origen y preparación de los datos, red base preentrenada elegida, congelamiento de capas y estrategia de fine-tuning.",
    tools:
      "Python, librería de deep learning (PyTorch o TensorFlow), entorno de entrenamiento y otras herramientas que uses.",
    results:
      "Métricas de evaluación (precisión, recall, matriz de confusión), comparación contra un modelo entrenado desde cero y conclusiones.",
    links: [
      { label: "Repositorio", url: "" },
      { label: "Informe", url: "" }
    ]
  },

  {
    id: "simulacion-planta",
    category: "Simulación industrial",
    title: "Simulación de una línea de producción",
    summary:
      "[EJEMPLO] Modelo dinámico de un proceso industrial para analizar cuellos de botella y validar estrategias de control.",
    tags: ["Simulink", "Python", "Modelado"],
    image: null,
    imageAlt: "Captura del modelo de simulación",
    metrics: [
      { value: "XX%", label: "mejora de throughput" },
      { value: "XX s", label: "tiempo de ciclo" },
      { value: "XX", label: "escenarios simulados" }
    ],
    context: "[EJEMPLO] Contexto del proceso que se modeló y el objetivo de la simulación.",
    approach: "[EJEMPLO] Cómo se construyó el modelo, qué supuestos se hicieron y cómo se validó.",
    tools: "[EJEMPLO] Simulink, Python y otras herramientas.",
    results: "[EJEMPLO] Resultados de los distintos escenarios y decisiones que permitió tomar.",
    links: [{ label: "Informe", url: "" }]
  },

  {
    id: "control-pid",
    category: "Control automático",
    title: "Diseño y sintonía de un controlador PID",
    summary:
      "[EJEMPLO] Identificación de la planta, diseño del controlador y análisis de estabilidad y respuesta al escalón.",
    tags: ["MATLAB", "PID", "Estabilidad"],
    image: null,
    imageAlt: "Gráfico de la respuesta al escalón del sistema controlado",
    metrics: [
      { value: "XX%", label: "sobreimpulso" },
      { value: "XX s", label: "tiempo de establecimiento" },
      { value: "XX", label: "margen de fase" }
    ],
    context: "[EJEMPLO] Qué sistema se controló y qué especificaciones debía cumplir.",
    approach: "[EJEMPLO] Identificación del modelo, método de sintonía y análisis de estabilidad.",
    tools: "[EJEMPLO] MATLAB, Control System Toolbox.",
    results: "[EJEMPLO] Comparación de la respuesta con y sin controlador.",
    links: [{ label: "Repositorio", url: "" }]
  },

  {
    id: "procesamiento-imagenes",
    category: "Procesamiento de imágenes",
    title: "Inspección visual automática",
    summary:
      "[EJEMPLO] Pipeline de preprocesamiento y segmentación para detectar defectos en piezas a partir de imágenes.",
    tags: ["OpenCV", "Python", "Segmentación"],
    image: null,
    imageAlt: "Imagen de una pieza con el defecto detectado",
    metrics: [
      { value: "XX%", label: "detección de defectos" },
      { value: "XX ms", label: "tiempo por imagen" }
    ],
    context: "[EJEMPLO] Qué defectos se buscaban detectar y en qué condiciones.",
    approach: "[EJEMPLO] Etapas del pipeline: captura, filtrado, segmentación y clasificación.",
    tools: "[EJEMPLO] OpenCV, NumPy.",
    results: "[EJEMPLO] Tasa de detección, falsos positivos y tiempos de procesamiento.",
    links: [{ label: "Repositorio", url: "" }]
  }
];