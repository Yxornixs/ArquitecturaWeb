const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ Titulo: "Hola quien quiera que sea desde routes modificado hoy" });
});

module.exports = router;
