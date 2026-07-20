var dashboardModel = require("../models/dashboardModel");

function dashboard(req, res){

    dashboardModel.dashboard()
    .then(function(resultado){
        res.json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        res.status(500).send(erro);
    });

}

module.exports = {
    dashboard
}