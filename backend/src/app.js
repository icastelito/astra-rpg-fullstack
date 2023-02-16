const router = require("./router"); // Importa as rotas
const express = require("express"); // Importa o express
const app = express(); // Cria o express app
app.use(router); // Usa as rotas


module.exports = app;