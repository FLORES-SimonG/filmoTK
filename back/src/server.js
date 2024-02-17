const express =require('express');
const movieRouter = require('./routes/movieRouter');
const homeRouter = require('./routes/homeRouter');
const morgan =require('morgan');
const cors= require('cors');

const app = express(); //!Nombre que le voy a poner Express() para mayor comodidad.

//!MIDDLEWARE -------
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//!------------------

//? SI QUIERO HACER UNO PROPIO MIDDLEWARE:

app.use((req,res,next)=>{
    console.log('Este es mi propio Middleware');
    next();
})


//!derivaciones
app.use('/',homeRouter);
app.use('/movies',movieRouter);


app.get('/demo', (req,res)=>res.send('DEMO'))

module.exports = app;   //!LO EXPORTO AL INDEX.JS DE BACK