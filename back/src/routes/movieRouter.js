const {getMovies, createNewMovie}= require ('../controllers/movieController.js');
const chequeoDeDatos= require ('../middlewares/chequedoDeDatos.js');
const express = require('express');

const movieRouter = express.Router(); //!.Router() es una función de Express.

//! Acá están los ENDPOINTS de las películas.
movieRouter.get('/',getMovies);//? Acá publicaría todas las peliculas.
movieRouter.post('/',chequeoDeDatos,createNewMovie);//? Acá crearía una nueva película. 

module.exports=movieRouter;
