const mongoose = require("mongoose");

const VotacionShema = new mongoose.Schema({
    titulo: { type: String },
    optionl: { type: String },
    optionll: { type: String },
    optionlll: { type: String },
    optionlV: { type: String },
    Votooptionl: { type: Number },
    Votooptionll: { type: Number },
    Votooptionlll: { type: Number },
    VotooptionlV: { type: Number }
}, { timestamps: true });

module.exports.Votacion = mongoose.model('Votacion',VotacionShema);