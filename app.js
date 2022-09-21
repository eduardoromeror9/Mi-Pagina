
// Crea una api que muestre imagenes de Star Wars

// Importa el modulo express
const express = require('express');

// Crea una instancia de express
app.get('/api/starwars', (req, res) => {
    res.send('Hello Star Wars!');
});

// Crea una ruta para la api
app.get('/api/starwars/:id', (req, res) => {
    res.send('Hello Star Wars! ' + req.params.id);
});

// Crea una ruta para la api
app.get('/api/starwars/:id/:name', (req, res) => {
    res.send('Hello Star Wars! ' + req.params.id + ' ' + req.params.name);
});

// Crea una ruta para la api
app.get('/api/starwars/:id/:name/:year', (req, res) => {
    res.send('Hello Star Wars! ' + req.params.id + ' ' + req.params.name + ' ' + req.params.year);
});


