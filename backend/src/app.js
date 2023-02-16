const express = require("express"); // Importa o express
const app = express(); // Cria o express app
app.get("/magia", (req, res) => res.status(200).send("Ola mundo bom"));

module.exports = app;