const {getMovies}= require ('../controllers/movieController.js');
const express = require('express');
const movieRouter = express.Router();
movieRouter.get('/',getMovies);

module.exports=movieRouter;
