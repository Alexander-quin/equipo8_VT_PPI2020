const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/",require("./routes/usuarios"))

app.get('/', function(req,res){
  res.send("Hola mi primer servidor en VPT")
})

app.get('/estudiantes', function(req,res){
  res.send("Este es el servicio de estudiantes")
})

app.get('/estudiantes/documento', function(req,res){
  res.send("El documeto y el estudiante es: "+req.params.documento)
})

app.listen(8080,function(){
  console.log("Servidor escuchando en el puerto 8080")
})