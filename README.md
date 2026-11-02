# Portafolio · Diego Aedo Fernández

Portafolio web personal de Ingeniería Civil en Automatización: visión computacional, deep learning, simulación y control.

Sitio estático hecho con HTML, CSS y JavaScript puro (sin frameworks ni compilación).

## Estructura

```
portafolio/
├── index.html        Estructura de la página
├── css/styles.css    Estilos (variables, componentes, responsive)
├── js/projects.js    Datos de los proyectos (el archivo que más se edita)
├── js/main.js        Menú, modal, animaciones
├── assets/img/       Fotos y capturas
└── assets/cv.pdf     CV (pendiente de agregar)
```

## Ver en local

Abrir la carpeta en VS Code y usar la extensión **Live Server** (clic derecho en `index.html` → *Open with Live Server*).

## Agregar un proyecto

Editar `js/projects.js`: copiar un bloque `{ ... }`, pegarlo al final de la lista y cambiar los textos. Las imágenes van en `assets/img/`.

## Pendientes antes de difundir el sitio

- [ ] Reemplazar correo, LinkedIn y GitHub en `index.html`
- [ ] Agregar foto en `assets/img/` y usarla en la sección "Sobre mí"
- [ ] Agregar `assets/cv.pdf`
- [ ] Completar fechas e instituciones en "Experiencia y formación"
- [ ] Reemplazar los proyectos de ejemplo y las métricas `XX`
- [ ] Quitar la línea `noindex` del `<head>` de `index.html`