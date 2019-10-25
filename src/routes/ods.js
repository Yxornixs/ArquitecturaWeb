const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const ods = require("../ods.json");
//console.log(ods);

router.get("/", (req, res) => {
  res.json(ods);
});

router.post("/", (req, res) => {
  const { Titulo } = req.body;
  if (Titulo) {
    const id_ods = ods.length + 1;
    const newOds = { ...req.body, id_ods };
    //console.log(newOds);
    ods.push(newOds);
    res.json(ods);
    //res.json('Se Grabo correctamente');
  } else {
    res.json("Error en el Servico al actualizar");
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id != "") {
    _.each(ods, (ods, i) => {
      if (ods.id_ods == id) {
        res.json(ods);
      }
    });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { Titulo } = req.body;
  if (Titulo) {
    _.each(ods, (ods, i) => {
      if (ods.id_ods == id) {
        ods.Titulo = Titulo;
      }
    });
    res.json(ods);
    res.json("Se Actualizo correctamente");
  } else {
    res.json("Error en el Servico al actualizar");
    res.send(ods);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(ods, (ods, i) => {
    if (ods.id_ods == id) {
      ods.splice(i, 1);
    }
  });
  res.send(ods);
});

module.exports = router;
