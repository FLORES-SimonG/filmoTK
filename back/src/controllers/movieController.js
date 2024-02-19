const servicioFilm = require('../services/moviesServies');



const getMovies=async(req, res)=>{
    try {
        const respuestaMovie = await servicioFilm.getMovies();
        res.status(200).send(respuestaMovie);
    } catch (error) {
        res.status(500).json({message: 'Error del servidor'})
   
    }
};

module.exports = {getMovies};