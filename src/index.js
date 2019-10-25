const express = require("express");
const app = express();
const morgan = require("morgan");

//setting
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middlewan
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes/index"));
app.use("/api/ods", require("./routes/ods"));
app.use("/api/senadores", require("./routes/senadores"));
/*
app.get('/', (req,res) =>{
    res.json({"Titulo": "Hola quien quiera que sea"});
});
*/
//starting the server
app.listen(app.get("port"), () => {
  console.log("Serven en puerto 3000");
});
