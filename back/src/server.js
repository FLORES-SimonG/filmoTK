const express =require('express');
const movieRouter = require('./routes/movieRouter');
const homeRouter = require('./routes/homeRouter');
const app = express();

app.use('/',homeRouter);
app.use('/movies',movieRouter);


app.get('/demo', (req,res)=>res.send('DEMO'))

module.exports = app;   