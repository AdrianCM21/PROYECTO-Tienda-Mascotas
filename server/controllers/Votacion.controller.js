const {Votacion} = require("../models/Votacion.models")


module.exports.createVotacion = async (request, response) => {
    try{
    const { titulo, optionl, optionll,optionlll,optionlV } = request.body;
    console.log(titulo, optionl, optionll,optionlll,optionlV)
    const prod = await Votacion.create({
        titulo,
        optionl, 
        optionll,
        optionlll,
        optionlV,
        Votooptionl:0,
        Votooptionll:0,
        Votooptionlll:0,
        VotooptionlV:0
    });
    response.json(prod);
    console.log(prod);
    } catch(err){response.json(err) } ;
}

module.exports.mostrarVotacion = async (request, response)=>{
    try {
        const prod = await Votacion.find()
        response.json({prod})
    } catch (error) {
        response.json(error);
    }
}

module.exports.mostrarUnVoto = async (request, response) => {
    try {
        const producto = await Votacion.findOne({_id:request.params.id})
        response.json(producto );
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
module.exports.actualizarVoto = async (request,response)=>{
    try {
        const producto = await Votacion.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}