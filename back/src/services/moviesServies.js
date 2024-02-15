const axios = require('axios');



const servicioFilm={
    
    getFilm : async ()=>{
        try {
            const {data} = await axios.get('https://henry-movies-dev-sgtm.3.us-1.fl0.io/');
            return data;
            
        }
            
           catch (error) {
             alert("Error actualizado AMIGO MÍO: " + error.message);
          }
    }}



module.exports=servicioFilm;

// getMovies();

//https://henry-movies-dev-sgtm.3.us-1.fl0.io/
