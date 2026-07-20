var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/cadastrar2", jogoController.cadastrar2);

router.get("/listar2", jogoController.listar2);

module.exports = router;