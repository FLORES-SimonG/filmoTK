const servicioFilm = require('../services/moviesServies');



const getMovies=async(req, res)=>{
    try {
        const respuestaMovie = await servicioFilm.getMovies();
        res.status(200).send(respuestaMovie);
    } catch (error) {
        res.status(500).json({message: 'Error del servidor'})
    }
};

const createNewMovie =async(req,res)=>{
    try {
        const respuestaCreateNewMovie = await servicioFilm.createNewMovie(req.body);
        res.status(201).send(respuestaCreateNewMovie);
    } catch (error) {
        console.log(`experimento: ${error}`);
        res.status(500).json({ message: 'Error al crear la película', error: error.message });     
    }
}

module.exports = {getMovies, createNewMovie};