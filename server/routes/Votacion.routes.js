const Control = require('../controllers/Votacion.controller');

module.exports = (app)=>{
    app.get("/api/votacion",Control.mostrarVotacion);
    app.post("/api/votacion",Control.createVotacion);
    app.get("/api/votacion/:id",Control.mostrarUnVoto);
    app.put("/api/votacion/:id",Control.actualizarVoto);
}

