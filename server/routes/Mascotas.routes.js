const Control = require('../controllers/Mascota.controller');

module.exports = (app)=>{
    app.get("/api/mascota",Control.mostrarMascota);
    app.post("/api/mascota",Control.createMascota);
    app.get("/api/mascota/:id",Control.mostrarUnaMascota);
    app.put("/api/mascota/:id",Control.actualizarMascota);
    app.delete("/api/mascota/:id",Control.EliminarMascota);
}

