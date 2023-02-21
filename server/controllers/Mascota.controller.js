const {Mascota} = require("../models/Mascota.models")


module.exports.createMascota = async (request, response) => {
    try{
    const { nombre, tipo, description,skil1,skil2,skil3 } = request.body;
    console.log(nombre, tipo, description,skil1,skil2,skil3)
    const prod = await Mascota.create({
        nombre,
        tipo, 
        description,
        skil1,
        skil2,
        skil3
    });
    response.json(prod);
    console.log(prod);
    } catch(err){
        response.status(400);
        response.json(err);
        
     } ;
}

module.exports.mostrarMascota = async (request, response)=>{
    try {
        const prod = await Mascota.find()
        response.json({prod})
    } catch (error) {
        response.json(error);
    }
}

module.exports.mostrarUnaMascota = async (request, response) => {
    try {
        const producto = await Mascota.findOne({_id:request.params.id})
        response.json(producto );
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
module.exports.actualizarMascota = async (request,response)=>{
    try {
        const producto = await Mascota.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
module.exports.EliminarMascota = async (request,response)=>{
    try {
        const mascota = await Mascota.deleteOne({_id: request.params.id})
        response.json(mascota);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}