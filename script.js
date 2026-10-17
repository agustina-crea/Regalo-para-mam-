
const openGift = document.getElementById("openGift");
const giftContent = document.getElementById("giftContent");

// Botón para abrir la sorpresa
openGift.addEventListener("click", () => {
  giftContent.classList.remove("hidden");
  giftContent.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  openGift.textContent = "Tu sorpresa está acá ♡";
  openGift.disabled = true;
});

// Mensajitos para mamá
document.querySelectorAll(".note-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("noteReveal").textContent =
      button.dataset.note;
  });
});

// Volver al principio de la página
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Galería de las 13 fotos
const memories = [
  {
    image: "fotos/foto1.jpg",
    caption: "Los recuerdos más lindos empiezan con vos ♡"
  },
  {
    image: "fotos/foto2.jpg",
    caption: "Gracias por cada momento compartido."
  },
  {
    image: "fotos/foto3.jpg",
    caption: "Pequeños instantes que guardo en mi corazón."
  },
  {
    image: "fotos/foto4.jpg",
    caption: "Qué suerte tengo de tenerte como mamá."
  },
  {
    image: "fotos/foto5.jpg",
    caption: "Tu amor siempre me acompaña."
  },
  {
    image: "fotos/foto6.jpg",
    caption: "Momentos que quisiera guardar para siempre."
  },
  {
    image: "fotos/foto7.jpg",
    caption: "Gracias por estar en cada etapa de mi vida."
  },
  {
    image: "fotos/foto8.jpg",
    caption: "Con vos, hasta lo más simple es especial."
  },
  {
    image: "fotos/foto9.jpg",
    caption: "Una historia llena de amor y recuerdos."
  },
  {
    image: "fotos/foto10.jpg",
    caption: "Siempre voy a valorar todo lo que hacés por mí."
  },
  {
    image: "fotos/foto11.jpg",
    caption: "Mi lugar seguro, hoy y siempre."
  },
  {
    image: "fotos/foto12.jpg",
    caption: "Gracias por enseñarme a levantarme y seguir."
  },
  {
    image: "fotos/foto13.jpg",
    caption: "Te amo, mamá. Gracias por tanto. ♡"
  }
];

// Mostrar las fotos en la página
const photoGrid = document.getElementById("photoGrid");

memories.forEach((memory, index) => {
  const figure = document.createElement("figure");
  figure.className = "photo-card";

  const img = document.createElement("img");
  img.src = memory.image;
  img.alt = "Recuerdo con mamá " + (index + 1);
  img.loading = "lazy";

  // Mostrar un aviso si una foto no se encuentra
  img.addEventListener("error", () => {
    const placeholder = document.createElement("div");
    placeholder.className = "photo-placeholder";
    placeholder.textContent =
      "No se pudo cargar esta foto. Revisá el nombre del archivo.";

    img.replaceWith(placeholder);
  });

  const caption = document.createElement("figcaption");
  caption.textContent = memory.caption;

  figure.append(img, caption);
  photoGrid.appendChild(figure);
});
