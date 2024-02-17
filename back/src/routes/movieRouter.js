const {getMovies}= require ('../controllers/movieController.js');
const express = require('express');

const movieRouter = express.Router(); //!.Router() es una función de Express.

movieRouter.get('/',getMovies);//? Acá publicaría todas las peliculas.

module.exports=movieRouter;
