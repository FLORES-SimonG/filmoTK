const MovieRepository = require("../models/MovieRepository");
const URL = "http://localhost:3000/movies";
// const URL = 'https://henry-movies-dev-sgtm.3.us-1.fl0.io/';
const axios = require("axios");

const repositorio = new MovieRepository();

const callBack = async (e) => {
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
  } else if (puntaje.value < 0 || puntaje.value > 10) {
    alert("PUNTAJE NO VÁLIDO");
  } else if (año.value < 1900 || año.value > 2024) {
    alert("AÑO NO VÁLIDO");
  } else {
    repositorio.createMovie(obj);
    mostrarCartas();
    formulario.reset();
  }

try {
  const response = await axios.post(URL, obj);
  console.log(`Película creada: ${response.data}`);
  filmsDisponibles();
} catch (error) {
  console.error("Error al crear la película: ", error);
}

};

const mostrarCartas = () => {
  const carta = document.getElementById("envioFilm");
  carta.innerHTML = "";
  const moviesParciales = repositorio.getAllMovies();
  const conjuntoTarjetas = moviesParciales.map((actividad) => {
    return crearCarta(actividad);
  });
  conjuntoTarjetas.forEach((tarjeta) => carta.appendChild(tarjeta));
};

const crearCarta = (actividad) => {
  const { id, title, year, director, duration, genre, rate, poster } =
    actividad;

  const lista = document.createElement("div");

  let tituloRender = document.createElement("h3");
  tituloRender.textContent = title;

  let imagenRender = document.createElement("img");
  imagenRender.src = poster;
  imagenRender.setAttribute("alt", "Imagen");

  let directorRander = document.createElement("p");
  directorRander.textContent = `Director: ${director}`;

  let yearRender = document.createElement("p");
  yearRender.textContent = `Año: ${year}`;

  let durationRander = document.createElement("p");
  durationRander.textContent = `Duración: ${duration}`;

  let genreRander = document.createElement("p");
  genreRander.textContent = `Género: ${genre}`;

  let rateRander = document.createElement("p");
  rateRander.textContent = `${rate}`;

  lista.appendChild(tituloRender);
  lista.appendChild(imagenRender);
  lista.appendChild(directorRander);
  lista.appendChild(yearRender);
  lista.appendChild(durationRander);
  lista.appendChild(genreRander);
  lista.appendChild(rateRander);

  lista.addEventListener("click", () => {
    lista.remove();

    repositorio.deleteMovie(id);
  });

  return lista;
};
const formulario = document.querySelector(".form");
formulario.addEventListener("submit", callBack);

const botonCreador = document.getElementById("botonCreador");
const nombreElemento = document.createElement("h6");
const divDeveloper = document.getElementById("envioDeveloper");

//! Crear un botón para resetear el formulario ------------------
const botonReset = document.getElementById("buttonReset");

botonReset.addEventListener("click", function (e) {
  formulario.reset();
});
//!----------------------------------------------

// Establecer estilos iniciales
nombreElemento.style.margin = "8px";
nombreElemento.style.padding = "4px";
nombreElemento.style.textAlign = "center";
nombreElemento.style.backgroundColor = "firebrick";
nombreElemento.style.borderRadius = "25px";
nombreElemento.style.color = "whitesmoke";
nombreElemento.style.border = "2px solid whitesmoke";

botonCreador.addEventListener("click", function (e) {
  e.preventDefault();
  renderDev();
});

function renderDev() {
  const nombreCreador = document.getElementById("inputCreador");
  const nombre = nombreCreador.value;

  // Asignar el nombre
  nombreElemento.textContent = nombre;

  // Limpiar el nombreCreador
  nombreCreador.value = "";

  // Agregar el elemento al divDeveloper
  divDeveloper.innerHTML = "";
  divDeveloper.appendChild(nombreElemento);
}

//! Cuando estoy por abrir la WEB, se me carga automáticamente con DOMContentLoaded y derivo una función que la llamaré "filmsDisponibles".

document.addEventListener("DOMContentLoaded", function () {
  filmsDisponibles();
});

// //?OPCIÓN 1: USANDO .THEN .CATCH CON AXIOS
// const filmsDisponibles = () => {
//   //! Acá desarrollo mi función diciendo: Mapeame lo que tengo en tempData y retornamelo como una nueva actividad, cuyo nombre
//   //! de cada film, se llamará "MOVIE", posteriormente a esto, por cada elemento a tempData, usaré el createActivity de mi repositorio,
//   //! donde finalmente, hago mostrar las cartas con la función que declaré en la linea 74.

//   axios.get(URL)
//   .then(response => {
//     response.data.map(movie => {
//       repositorio.createActivity(movie);
//       return movie; // `map` espera que devuelvas un valor, aunque aquí no lo uses.
//     });
//     mostrarCartas();
//   })
//   .catch(error => alert("Error actualizado AMIGO MÍO: " + error.message));

// };

//?OPCIÓN 2: USANDO Async:

const filmsDisponibles = async () => {
  //! Acá desarrollo mi función diciendo: Mapeame lo que tengo en tempData y retornamelo como una nueva actividad, cuyo nombre
  //! de cada film, se llamará "MOVIE", posteriormente a esto, por cada elemento a tempData, usaré el createActivity de mi repositorio,
  //! donde finalmente, hago mostrar las cartas con la función que declaré en la linea 74.
  try {
    const response = await axios.get(URL);
    response.data.map((movie) => {
      repositorio.createMovie(movie);
      return movie; // `map` espera que devuelvas un valor, aunque aquí no lo uses.
    });
    mostrarCartas();
  } catch (error) {
    (error) => alert("Error actualizado AMIGO MÍO: " + error.message);
  }
};

console.log("Hola mundo amigo!");
// filmsDisponibles();
