/* ==========================================================
   PROJECTS.JS · TUS DATOS
   Este es el archivo que más editaré.

   Para AGREGAR un proyecto: copiar un bloque completo { ... },
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
    category: "Visión computacional - biomédica",
    title: "Clasificación de imágenes con Redes neuronales y Transfer Learning",
    summary:
      "Desarrollo de un sistema de inteligencia artificial para clasificar tomografías computarizadas renales en cuatro categorías: quiste, cálculo renal, tumor y normal. Mediante aprendizaje semi-supervisado, aprovecha datos etiquetados y no etiquetados para reducir el etiquetado manual y lograr un alto rendimiento de clasificación.",
    tags: ["Python", "Deep Learning", "Transfer Learning"],
    image: "assets/img/vision-portada.jpg",
    imageAlt: "Diagrama del pipeline de clasificación de imágenes",
    metrics: [
      { value: "98%", label: "Precisión" },
      { value: "98,96%", label: "Macro F1" },
      { value: "98%", label: "Weighted F1-score" }
    ],
    context:
      "La clasificación automática de imágenes médicas requiere grandes cantidades de datos etiquetados por especialistas, lo que representa un desafío en términos de tiempo y recursos. Este proyecto aborda dicha problemática mediante técnicas de aprendizaje semi-supervisado aplicadas a imágenes de tomografía computarizada del riñón.",
    approach:
      "Se implementó una arquitectura ResNet-50 con pesos preentrenados en RadImageNet, utilizando Transfer Learning y una estrategia semi-supervisada basada en pseudoetiquetado mediante modelos Teacher y Student",
    tools:
      "Python, TensorFlow, Keras, ResNet-50, RadImageNet, Scikit-learn, OpenCV, PIL, Matplotlib y Seaborn.",
    results:
      "En la segunda experiencia experimental, el modelo Student alcanzó un Accuracy de 98 %, un Macro F1-score de 98,96 % y un Weighted F1-score de 98 %. Durante esta experiencia se incorporaron 4.537 pseudoetiquetas, con una auditoría de 99,60 % de coincidencia con las etiquetas reales.",
    links: [
      { label: "Repositorio", url: "" },
      { label: "Informe", url: "" }
    ]
  },



  {
    id: "EJEMPLO procesamiento-imagenes",
    category: "Vision computacional - Detección",
    title: "Deteccion y conteo de personas en camara de seguridad de casa ",
    summary:
      "[EJEMPLO] Pipeline de preprocesamiento y segmentación para detectar defectos en piezas a partir de imágenes.",
    tags: ["Python", "Yolo11m", "Tracker", "Detección"],
    image: "assets/img/imagen_deteccion_camara.JPG",
    imageAlt: "Imagen de una pieza con el defecto detectado",
    video: "assets/video/video_deteccion_camara_web.mp4",
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