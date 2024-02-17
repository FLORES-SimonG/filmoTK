const Movie = require('./Movie');
class MovieRepository {
    constructor() {
      this.movies = [];
    }
    getAllMovies() {
      return this.movies;
    }
  
    createMovie(object) {
      const movie = new Movie(object);
      this.movies.push(movie);
    }
  
    deleteMovie(id) {
      this.movies = this.movies.filter((x) => x.id !== id);
    }
  }

//! Lo puedo hacer de esta forma
  module.exports = MovieRepository;

  //! Existe otra forma cuando quiero disponibilizar de un modulo 
  //! varias cosas.
