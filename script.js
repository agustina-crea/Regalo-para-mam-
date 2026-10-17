
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

// Galería de las 18 fotos de toda la familia
const memories = [
  {
    image: "fotos/foto1.jpg",
    caption: "Los recuerdos más lindos los compartimos con vos. ♡"
  },
  {
    image: "fotos/foto2.jpg",
    caption: "Gracias por cada momento compartido en familia."
  },
  {
    image: "fotos/foto3.jpg",
    caption: "Pequeños instantes que guardamos en el corazón."
  },
  {
    image: "fotos/foto4.jpg",
    caption: "Qué suerte tenemos de tenerte en nuestras vidas."
  },
  {
    image: "fotos/foto5.jpg",
    caption: "Tu amor es parte de todo lo lindo que somos."
  },
  {
    image: "fotos/foto6.jpg",
    caption: "Momentos que quisiéramos guardar para siempre."
  },
  {
    image: "fotos/foto7.jpg",
    caption: "Gracias por acompañarnos en cada etapa."
  },
  {
    image: "fotos/foto8.jpg",
    caption: "Con vos, hasta lo más simple se vuelve especial."
  },
  {
    image: "fotos/foto9.jpg",
    caption: "Una historia familiar llena de amor y recuerdos."
  },
  {
    image: "fotos/foto10.jpg",
    caption: "Siempre vamos a valorar todo lo que compartimos."
  },
  {
    image: "fotos/foto11.jpg",
    caption: "Tu abrazo siempre tiene un lugar especial."
  },
  {
    image: "fotos/foto12.jpg",
    caption: "Gracias por tantos momentos que nos unen."
  },
  {
    image: "fotos/foto13.jpg",
    caption: "Te amamos, mamá. Hoy y siempre. ♡"
  },
  {
    image: "fotos/foto14.jpg",
    caption: "Un recuerdo más de nuestra hermosa historia."
  },
  {
    image: "fotos/foto15.jpg",
    caption: "Las mejores cosas de la vida se comparten en familia."
  },
  {
    image: "fotos/foto16.jpg",
    caption: "Cada sonrisa guarda un pedacito de nuestro amor."
  },
  {
    image: "fotos/foto17.jpg",
    caption: "Que nunca nos falten momentos para abrazarnos."
  },
  {
    image: "fotos/foto18.jpg",
    caption: "18 recuerdos, miles de momentos y un amor infinito. ❤️"
  }
];

// Mostrar las fotos en la página
const photoGrid = document.getElementById("photoGrid");

// Evitar duplicar las fotos si el código se ejecuta nuevamente
photoGrid.innerHTML = "";

memories.forEach((memory, index) => {
  const figure = document.createElement("figure");
  figure.className = "photo-card";

  const img = document.createElement("img");
  img.src = memory.image;
  img.alt = "Recuerdo familiar " + (index + 1);
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

