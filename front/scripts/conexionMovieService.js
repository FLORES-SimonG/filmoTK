const axios = require("axios");
const validacionDatosPeliculas = require("./validacionDatosPeliculas");
const movieImagen = require("./movieImagen");

async function crearPelicula(formulario, repositorio, URL) {
  const pelicula = {
    title: formulario.querySelector(".nombreJS").value,
    rate: formulario.querySelector(".puntajeJS").value,
    poster: formulario.querySelector(".urlJS").value,
    year: formulario.querySelector(".añoJS").value,
    director: formulario.querySelector(".autorJS").value,
    duration: formulario.querySelector(".duracionJS").value,
    genre: formulario.querySelector(".generoJS").value,
  };

  if (!validacionDatosPeliculas.validarDatosPelicula(pelicula)) {
    alert(
      "La validación de los datos de la película falló. Vuelva a completar nuevamente."
    );
    throw new Error("La validación de los datos de la película falló.");
  }

  try {
    await axios.post(URL, pelicula);
    repositorio.createMovie(pelicula);
    movieImagen.mostrarCartas(repositorio);
  } catch (error) {
    console.error("Error al crear la película, el problema está acá:", error);
    alert(`Error al crear la película: ${error.message}`);
  }
}

async function filmsDisponibles(repositorio, URL) {
  try {
    const response = await axios.get(URL);
    response.data.forEach((movie) => repositorio.createMovie(movie));
    movieImagen.mostrarCartas(repositorio);
  } catch (error) {
    console.error("Error al cargar películas disponibles, acá debería estar el error:", error);
    alert("Error al cargar películas disponibles.");
  }
}

module.exports = { crearPelicula, filmsDisponibles };
