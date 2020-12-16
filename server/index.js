var express = require('express') //usamos Express
var app = express()                
 
var port = process.env.PORT || 3000  // nuestro puerto para hacer esta prueba
 
 
//--> Instrucciones GET
 
/* He colocado las URL encima de cada código para probar más rápido
   Podéis cambiarlo por vuestro nombre para verlo por la web
*/
 
// http://localhost:3000/JuanLu/Felipe
app.get('/:nombre/:apellido', function(req, res) {
  var nombre = req.params.nombre
  var apellido = req.params.apellido
  res.send("¡Hola Mundo! os saluda => " + nombre + " " + apellido +  
    " desde GET 1, con URL params")   
})
 
 
// http://localhost:3000/personal/?nombre=JuanLu&apellido=Felipe
app.get('/personal', function(req, res) {
  var nombre = req.query.nombre
  var apellido = req.query.apellido
  res.send("¡Hola Mundo! os saluda => " + nombre + " " + apellido + 
    " desde GET 2, con Query params")   
})
 
 
// http://localhost:3000/
app.get('*', function(req, res) {
  res.send(" Hola Mundo desde GET * en Api básica")  
})
 
 
//--> Instrucciones POST 
app.post('/', function(req, res) {
  res.send("Con este método crearíamos un recurso nuevo...")   
})
 
 
//--> Instrucciones PUT
app.put('/', function(req, res) {
    res.send("Con este método actualizamos un recurso existente...")   
})
 
//--> Instrucciones DELETE
app.delete('/', function(req, res) {
  res.send("Con este método borramos recursos")  
})

app.listen(port) // iniciamos nuestro servidor para escuchar en nuestro puerto
console.log("La nueva API está escuchando en el puerto " + port)
