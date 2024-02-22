function validarDatosPelicula(pelicula) {
    if (!pelicula.title || !pelicula.rate || !pelicula.poster || !pelicula.year || !pelicula.director || !pelicula.duration || !pelicula.genre) {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    if (pelicula.rate < 0 || pelicula.rate > 10) {
        alert("PUNTAJE NO VÁLIDO: debe estar entre 0 y 10.");
        return false;
    }
    if (pelicula.year < 1900 || pelicula.year > 2024) {
        alert("AÑO NO VÁLIDO: debe estar entre 1900 y 2024.");
        return false;
    }
    return true;
}

module.exports = { validarDatosPelicula };
