const { listar } = require("../controllers/jogoController");
var database = require("../database/config");

function cadastrar2(nome,tag,imagem,idUsuario){

    var instrucao = `INSERT INTO jogo(nome,imagem,fk_usuario) VALUES('${nome}','${imagem}',${idUsuario});`

    return database.executar(instrucao)
    .then(function(){
        var instrucaoTag = `INSERT INTO tag(nome,fk_jogo) VALUES ('${tag}',(SELECT (id) FROM jogo));`
        return database.executar(instrucaoTag)
    })
}
function listar2(){

    var instrucao = `SELECT jogo.id, jogo.nome, jogo.imagem, GROUP_CONCAT(tag.nome SEPARATOR ', ') AS tag FROM jogo LEFT JOIN tag ON jogo.id = tag.fk_jogo GROUP BY jogo.id ORDER BY jogo.id DESC;`

    return database.executar(instrucao)

}
module.exports={
    cadastrar2,
    listar2
}