/* ==========================================================
   MAIN.JS · Comportamiento del sitio

   Índice
   1. Ayudantes
   2. Tarjetas de proyecto (generadas desde projects.js)
   3. Modal de ficha técnica
   4. Menú móvil
   5. Enlace activo en la navbar
   6. Aparición de secciones al hacer scroll
   ========================================================== */

(function () {
  "use strict";

  /* ---------- 1. AYUDANTES ---------- */

  // Crea un elemento con clase y texto opcionales.
  // Usamos textContent (no innerHTML) para que los textos se muestren tal cual.
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // Lista de etiquetas de tecnología
  function createTags(list) {
    const ul = el("ul", "tags");
    list.forEach(function (name) {
      ul.appendChild(el("li", "tag", name));
    });
    return ul;
  }

  // Imagen del proyecto, o recuadro vacío si todavía no hay imagen
  function createMedia(project, className) {
    if (project.image) {
      const wrap = el("div", className);
      const img = el("img");
      img.src = project.image;
      img.alt = project.imageAlt || project.title;
      img.loading = "lazy";
      wrap.appendChild(img);
      return wrap;
    }
    const placeholder = el("div", className + " placeholder", "Imagen del proyecto");
    placeholder.setAttribute("role", "img");
    placeholder.setAttribute("aria-label", project.imageAlt || project.title);
    return placeholder;
  }

  // Enlace con flecha: "Ver ficha →"
  function createArrowLabel(text, tag) {
    const node = el(tag || "span", "link-arrow", text + " ");
    const arrow = el("span", null, "→");
    arrow.setAttribute("aria-hidden", "true");
    node.appendChild(arrow);
    return node;
  }


  /* ---------- 2. TARJETAS DE PROYECTO ---------- */

  const grid = document.getElementById("projects-grid");
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = modal ? modal.querySelector(".modal__close") : null;
  let lastFocused = null; // para devolver el foco al cerrar el modal

  function createCard(project) {
    const card = el("article", "card");
    card.dataset.project = project.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", "Ver ficha: " + project.title);

    card.appendChild(createMedia(project, "card__media"));
    card.appendChild(el("p", "card__category", project.category));
    card.appendChild(el("h3", "card__title", project.title));
    card.appendChild(el("p", "card__desc", project.summary));
    card.appendChild(createTags(project.tags));
    card.appendChild(createArrowLabel("Ver ficha"));

    // Abrir con clic...
    card.addEventListener("click", function () {
      openModal(project);
    });
    // ...y con teclado (Enter o Espacio)
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(project);
      }
    });

    return card;
  }

  function renderProjects() {
    if (!grid || typeof PROJECTS === "undefined") return;
    grid.innerHTML = "";
    PROJECTS.forEach(function (project) {
      grid.appendChild(createCard(project));
    });
  }


  /* ---------- 3. MODAL DE FICHA TÉCNICA ---------- */

  function createBlock(title, text) {
    const section = el("section", "modal__block");
    section.appendChild(el("h4", null, title));
    section.appendChild(el("p", null, text));
    return section;
  }

  function renderModal(project) {
    modalBody.innerHTML = "";

    modalBody.appendChild(createMedia(project, "modal__media"));

    const title = el("h3", "modal__title", project.title);
    title.id = "modal-title"; // lo usa aria-labelledby del <dialog>
    modalBody.appendChild(title);
    modalBody.appendChild(createTags(project.tags));

    // Métricas (solo si el proyecto las tiene)
    if (project.metrics && project.metrics.length) {
      const metrics = el("ul", "metrics");
      project.metrics.forEach(function (m) {
        const li = el("li");
        li.appendChild(el("strong", null, m.value));
        li.appendChild(el("span", null, m.label));
        metrics.appendChild(li);
      });
      modalBody.appendChild(metrics);
    }

    modalBody.appendChild(createBlock("Contexto", project.context));
    modalBody.appendChild(createBlock("Enfoque", project.approach));
    modalBody.appendChild(createBlock("Herramientas", project.tools));
    modalBody.appendChild(createBlock("Resultados", project.results));

    // Enlaces (se omiten los que no tienen url)
    const links = (project.links || []).filter(function (l) {
      return l.url;
    });
    if (links.length) {
      const wrap = el("div", "modal__links");
      links.forEach(function (l) {
        const a = createArrowLabel(l.label, "a");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener";
        wrap.appendChild(a);
      });
      modalBody.appendChild(wrap);
    }
  }

  function openModal(project) {
    if (!modal) return;
    lastFocused = document.activeElement;
    renderModal(project);
    modal.showModal(); // el navegador mantiene el foco dentro y cierra con Esc
    const content = modal.querySelector(".modal__content");
    if (content) content.scrollTop = 0;
  }

  if (modal) {
    // Botón ✕
    modalClose.addEventListener("click", function () {
      modal.close();
    });

    // Clic en el fondo oscuro (fuera de la ficha)
    modal.addEventListener("click", function (event) {
      if (event.target === modal) modal.close();
    });

    // Al cerrar (por cualquier vía), devolver el foco a la tarjeta
    modal.addEventListener("close", function () {
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
    });
  }


  /* ---------- 4. MENÚ MÓVIL ---------- */

  const toggle = document.querySelector(".navbar__toggle");
  const menu = document.getElementById("menu");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Al elegir una sección, el menú se cierra
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    // Esc también cierra el menú
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }


  /* ---------- 5. ENLACE ACTIVO EN LA NAVBAR ---------- */

  const navLinks = document.querySelectorAll('.navbar__menu a[href^="#"]:not(.btn)');
  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("is-active", isCurrent);
            if (isCurrent) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      // Se considera "actual" la sección que cruza la franja central de la pantalla
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }


  /* ---------- 6. APARICIÓN AL HACER SCROLL ---------- */

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // una sola vez
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    // Navegadores muy antiguos: mostrar todo sin animación
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }


  /* ---------- ARRANQUE ---------- */
  renderProjects();
})();