var jogoModel = require("../models/jogoModel");

function cadastrar2(req,res){

    var nome = req.body.nomeServer
    var tag = req.body.tagServer
    var imagem = req.body.imagemServer
    var idUsuario = req.body.idUsuarioServer

    jogoModel.cadastrar(nome,tag,imagem,idUsuario)
    .then(function(resultado){
        res.json(resultado)
    }).catch(function(erro){
        console.log(erro);
        res.status(500).send(erro)
    })
}
function listar2(req, res){

    jogoModel.listar()
    .then(function(resultado){
        res.json(resultado)
    }).catch(function(erro){
        console.log(erro)
        res.status(500).send(erro)
    })
}
module.exports={
    cadastrar2,
    listar2
}