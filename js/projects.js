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
      "Se implementó una arquitectura ResNet-50 con pesos preentrenados en RadImageNet, utilizando Transfer Learning y una estrategia semi-supervisada. Inicialmente el modelo se entrena con un conjunto de datos etiquetados acotados (modelo teacher), luego se incorporan iterativamente datos sin etiqueta y el modelo les entrega una pseudo-etiqueta (modelo student). Finalmente se realiza una auditoria a las pseudo-etiquetas para compararlas con su etiqueta real",
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
    title: "PoC - Deteccion y conteo de personas en camara de seguridad de casa ",
    summary:
      "Desarrollo de una prueba de concepto (PoC) para la detección, seguimiento y conteo automatizado de personas mediante visión computacional. El sistema identifica individuos en secuencias de video, rastrea sus trayectorias y reconoce cruces de una línea virtual, clasificando los desplazamientos como entradas o salidas.",
    tags: ["Python", "Yolo11m", "Tracker", "Detección" , "PoC"],
    image: "assets/img/imagen_deteccion_camara.jpg",
    imageAlt: "Persona cruzando la línea de conteo en la cámara de seguridad",
    video: "assets/video/video_deteccion_camara_web.mp4",
    metrics: [
      { value: "80%", label: "Exactitud" },
    ],
    context: "El conteo manual de personas presenta limitaciones en términos de precisión, continuidad y disponibilidad de información. Este proyecto explora el uso de inteligencia artificial y procesamiento de imágenes para automatizar el monitoreo de flujos de personas, facilitando la generación de datos cuantitativos a partir de fuentes de video.",
    approach: "Se implementó una arquitectura modular que integra detección de objetos mediante deep learning, seguimiento multiobjeto y análisis geométrico de trayectorias. El sistema utiliza YOLO11 para detectar personas y ByteTrack para mantener identificadores individuales entre fotogramas. Posteriormente, un algoritmo geométrico basado en intersección de segmentos e histéresis identifica los cruces de una línea virtual, determina su dirección y registra cada evento.",
    tools: "Python, YOLO11, ByteTrack, OpenCV, Supervision, PyTorch, CUDA, NumPy y Pandas.",
    results: "Se desarrolló un prototipo funcional capaz de detectar y seguir personas, identificar cruces de una línea virtual y clasificar automáticamente entradas y salidas. El sistema genera video anotado con identificadores y trayectorias, además de archivos CSV y JSON con eventos, estadísticas y métricas de rendimiento. La lógica de conteo contempla pruebas sintéticas para evaluar distintos escenarios de desplazamiento, dirección y comportamiento de los identificadores. El proyecto establece una base modular y extensible para desarrollar soluciones de monitoreo automatizado, análisis de flujos y gestión de ocupación mediante visión computacional.",
    links: [{ label: "Repositorio", url: "" }]
  }
];