var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/", function(req, res){
    dashboardController.dashboard(req, res);
});

module.exports = router;