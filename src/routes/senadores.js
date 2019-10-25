const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const senador = require("../senadores.json");
//console.log(senador);

router.get("/", (req, res) => {
  res.json(senador);
});

router.post("/", (req, res) => {
  const {
    apellido,
    nombre,
    provincia,
    partido,
    bloque,
    d_legal,
    c_legal,
    d_real,
    c_real,
    email,
    telefono
  } = req.body;
  if (apellido && nombre) {
    const id = senador.length + 1;
    const newSenador = { ...Request.body, id };
    senador.push(newSenador);
    console.log.newSenador();
    res.json("Guardado");
  } else {
    res.send("Petición Erronea");
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  if (apellido && nombre) {
    _.each(senador, (senado, i) => {
      if (senador.id == id) {
        senador.apellido;
        senador.nombre;
        senador.provincia;
        senador.partido;
        senador.bloque;
        senador.d_legal;
        senador.c_legal;
        senador.d_real;
        senador.c_real;
      }
    });
    res.json("Senador Actualizado");
  } else {
    res.status(500).json({ error: "Error en el Servicio al actualizar" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(senador, (senado, i) => {
    if (senador.id == id) {
      senador.splice(i, 1);
    }
  });
  res.send(senador);
});

module.exports = router;
