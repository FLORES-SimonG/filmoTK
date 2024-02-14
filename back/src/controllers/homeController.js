const getHome=(req,res)=>{
    res
        .status(200)
        .send("Estas en la ruta GET '/' de Filmo-TK");
};
const postHome=(req,res)=>{
    res
        .status(200)
        .send("Estas en la ruta POST '/' de Filmo-TK");
};

module.exports ={getHome, postHome};