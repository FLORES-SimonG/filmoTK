// const axios = require("axios");

const Movie=require("../models/Movie.js");



const servicioFilm = { getMovies: async () =>{
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      return error;
    }
  }
};

module.exports = servicioFilm;

// getMovies();

//https://henry-movies-dev-sgtm.3.us-1.fl0.io/
