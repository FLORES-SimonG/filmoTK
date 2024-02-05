class Activity {
  constructor({ id, title, year, director, duration, genre, rate, poster }) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }
  getAllActivities() {
    return this.activities;
  }

  createActivity(object) {
    const activity = new Activity(object);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((x) => x.id !== id);
  }
}

const repositorio = new Repository();

const callBack = (e) => {
  e.preventDefault();
  const titulo = formulario.querySelector(".nombreJS");
  // const comentario = formulario.querySelector(".descripcionJS");
  const url = formulario.querySelector(".urlJS");
  const año = formulario.querySelector(".añoJS");
  const autor = formulario.querySelector(".autorJS");
  const duracion = formulario.querySelector(".duracionJS");
  const genero = formulario.querySelector(".generoJS");
  const puntaje = formulario.querySelector(".puntajeJS");

  const idNumber = Date.now();
  const obj = {
    id: idNumber,
    title: titulo.value,
    rate: puntaje.value,
    poster: url.value,
    year: año.value,
    director: autor.value,
    duration: duracion.value,
    genre: genero.value,
  };

  if (
    titulo.value.length == 0 ||
    puntaje.value.length == 0 ||
    url.value.length == 0 ||
    año.value.length == 0 ||
    autor.value.length == 0 ||
    duracion.value.length == 0 ||
    genero.value.length == 0
  ) {
    alert("COMPLETA LOS DATOS");
  } else {
    repositorio.createActivity(obj);
    mostrarCartas();
    formulario.reset();
  }
};

const mostrarCartas = () => {
  const carta = document.getElementById("envioFilm");
  carta.innerHTML = "";
  const actividadesParciales = repositorio.getAllActivities();
  const conjuntoTarjetas = actividadesParciales.map((actividad) => {
    return crearCarta(actividad);
  });
  conjuntoTarjetas.forEach((tarjeta) => carta.appendChild(tarjeta));
};

const crearCarta = (actividad) => {
  const { id, title, year, director, duration, genre, rate, poster } =
    actividad;

  const lista = document.createElement("div");

  let tituloRender = document.createElement("h4");
  tituloRender.textContent = title;

  let imagenRender = document.createElement("img");
  imagenRender.src = poster;
  imagenRender.setAttribute("alt", "Imagen");

  let directorRander = document.createElement("p");
  directorRander.textContent = director;

  let yearRender = document.createElement("p");
  yearRender.textContent = year;

  let durationRander = document.createElement("p");
  durationRander.textContent = duration;

  let genreRander = document.createElement("p");
  genreRander.textContent = genre;

  let rateRander = document.createElement("p");
  rateRander.textContent = rate;

  lista.appendChild(tituloRender);
  lista.appendChild(imagenRender);
  lista.appendChild(directorRander);
  lista.appendChild(yearRender);
  lista.appendChild(durationRander);
  lista.appendChild(genreRander);
  lista.appendChild(rateRander);

  lista.addEventListener("click", () => {
    lista.remove();

    repositorio.deleteActivity(id);
  });

  return lista;
};
const formulario = document.querySelector(".form");
formulario.addEventListener("submit", callBack);
