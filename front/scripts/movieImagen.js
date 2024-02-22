function mostrarCartas(repositorio) {
  const carta = document.getElementById("envioFilm");
  carta.innerHTML = "";
  const moviesParciales = repositorio.getAllMovies();
  moviesParciales.forEach((movie) => {
    const tarjeta = crearCarta(movie);
    carta.appendChild(tarjeta);
  });
}

function crearCarta(movie) {
  const { title, year, director, duration, genre, rate, poster } = movie;

  const card = document.createElement("div");
  card.className = "movie-card";

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const image = document.createElement("img");
  image.src = poster;
  image.alt = "Movie Poster";

  const yearElement = document.createElement("p");
  yearElement.textContent = `Año: ${year}`;

  const directorElement = document.createElement("p");
  directorElement.textContent = `Director: ${director}`;

  const durationElement = document.createElement("p");
  durationElement.textContent = `Duración: ${duration}`;

  const genreElement = document.createElement("p");
  genreElement.textContent = `Género: ${genre}`;

  const rateElement = document.createElement("p");
  rateElement.textContent = `${rate}`;

  card.appendChild(titleElement);
  card.appendChild(image);
  card.appendChild(yearElement);
  card.appendChild(directorElement);
  card.appendChild(durationElement);
  card.appendChild(genreElement);
  card.appendChild(rateElement);

  return card;
}

module.exports = { mostrarCartas };
