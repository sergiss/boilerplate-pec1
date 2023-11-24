import "../css/category.scss";
import "../css/presentation.scss";
import "../css/card.scss";
import "../css/news.scss";
import "../css/header.scss";
import "../css/footer.scss";
import "../css/detail.scss";
import "../css/carousel.scss";
import "../css/index.scss";

/* Menú de navegación */
const initNavbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los .nav-link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      // Itera todos los links
      // Si el link coincide con la ruta actual
      if (window.location.href.includes(link.getAttribute("href"))) {
        link.classList.add("selected"); // Se añade la clase selected
      }
    });
  });
};

/* Scroll páginas */
const initScrollButton = () => {
  // Selección del boton 'scrollButton'
  const scrollButton = document.getElementById("scrollButton");
  if (!scrollButton) return;

  const toggleVisibility = (visible) => {
    scrollButton.classList.toggle("is-visible", visible);
  };

  const handleScroll = () => {
    toggleVisibility(
      // Pasamos por argumento si scrollButton es visible
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    );
  };

  const handleClick = () => {
    // Elimina posibles hash en la url
    const urlHashless = window.location.href.split("#")[0];
    window.history.pushState({}, document.title, urlHashless);
    // Movemos el escroll a la posición 0
    window.scrollTo({ top: 0 });
  };

  // Evento para detectar el escroll de la ventana
  window.addEventListener("scroll", handleScroll);
  // Evento de click del botón
  scrollButton.addEventListener("click", handleClick);
};

/* Año actualizado */
const initCurrentYear = () => {
  const element = document.getElementById("currentYear");
  if (!element) return;

  element.textContent = new Date().getFullYear();
};

/* carousel */
const initCarousel = () => {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const carouselItems = carousel.querySelectorAll(".carousel-item");
  if (!carouselItems.length) return;

  document.getElementById("prevButton")?.addEventListener("click", () => {
    const itemWidth = carouselItems[0].clientWidth;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft === 0) {
      carousel.scrollLeft = maxScrollLeft;
    } else {
      carousel.scrollLeft -= itemWidth;
    }
  });

  document.getElementById("nextButton")?.addEventListener("click", () => {
    const itemWidth = carouselItems[0].clientWidth;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= maxScrollLeft) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += itemWidth;
    }
  });
};

const init = () => {
  /* Header */
  initNavbar();

  /* Content */
  initCarousel();

  /* Footer */
  initScrollButton();
  initCurrentYear();
};

init();
