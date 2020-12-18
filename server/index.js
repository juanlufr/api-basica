// server/index.js

const express = require('express');

const app = express();

// http://localhost:3000/JuanLu/Felipe
app.get('/:nombre/:apellido', (req, res) => {
  const { nombre, apellido } = req.params;

  res.send(
    `¡Hola Mundo! os saluda => ${nombre} ${apellido} desde GET 1, con URL params`
  );
});

// http://localhost:3000/personal/?nombre=JuanLu&apellido=Felipe
app.get('/personal', (req, res) => {
  const { nombre, apellido } = req.query;

  res.send(
    `¡Hola Mundo! os saluda => ${nombre} ${apellido} desde GET 2, con Query params`
  );
});

// http://localhost:3000/
app.get('*', (req, res) => {
  res.send(' Hola Mundo desde GET * en Api básica');
});

// --> Instrucciones POST
app.post('/', (req, res) => {
  res.send('Con este método crearíamos un recurso nuevo...');
});

// --> Instrucciones PUT
app.put('/', (req, res) => {
  res.send('Con este método actualizamos un recurso existente...');
});

// --> Instrucciones DELETE
app.delete('/', (req, res) => {
  res.send('Con este método borramos recursos');
});

module.exports = app;
