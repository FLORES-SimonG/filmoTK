const app =require('./src/server.js');
const conDb = require('./src/config/conDb.js');
const PORT=3000;


conDb().then((res) => {
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.error('Error al conectar BDD.');
}); 


// app.listen(PORT, ()=>{
//     console.log(`Server listening on http://localhost:${PORT}`)
// })



// dbConfig().then((res) => {
//     app.listen(puerto, () => {
//         console.log(Server listening on http://localhost:${puerto});
//     })
// }).catch((err) => {
//     console.error('Error al conectar BDD.');
// });