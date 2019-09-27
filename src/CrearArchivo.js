const fs = require("fs");

fs.writefile(
  "./texto.txt",
  "ejemplo de escritura en archivo Arquitectura web",
  function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Archivo Creado");
  }
);
console.log("ultima linea de codigo");
