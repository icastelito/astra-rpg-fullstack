const express = require("express");
const router = express.Router();
const magiasControladores = require("./controllers/magiasControladores");

router.get("/magias", magiasControladores.getAll);

module.exports = router;
