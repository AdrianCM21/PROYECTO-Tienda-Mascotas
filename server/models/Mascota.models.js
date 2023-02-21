const mongoose = require("mongoose");

const MascotaShema = new mongoose.Schema({
    nombre: { 
        type: String,
        required:true,
        minlength:[3,'El minimimo es de 3 caracteres']
    },
    tipo: { 
        type: String,
        required:true,
        minlength:[3,'El minimimo es de 3 caracteres'] },
    description: { 
        type: String,
        required:true,
        minlength:[3,'El minimimo es de 3 caracteres'] },
    skil1: { type: String },
    skil2: { type: String },
    skil3: { type: String }
}, { timestamps: true });

module.exports.Mascota = mongoose.model('Mascota',MascotaShema);