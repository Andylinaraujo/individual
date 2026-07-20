var database = require("../database/config");

function dashboard() {
    var totaljogos = `
        SELECT COUNT(*) AS totaljogos FROM jogo;`
    var tagmaisusada = `
        SELECT nome, ROUND(COUNT(*) * 100 / (SELECT COUNT(*) FROM tag),1) AS porcentagem FROM tag GROUP BY nome ORDER BY COUNT(*) DESC LIMIT 1;`

    var graficorosca = `
        SELECT nome, COUNT(*) AS quantidade FROM tag GROUP BY nome; `

    var graficobarra = ` SELECT j.nome, COUNT(t.id) AS quantidade FROM jogo j LEFT JOIN tag t ON j.id = t.fk_jogo GROUP BY j.id ORDER BY quantidade DESC;`

    var listatags = `
        SELECT nome FROM tag ORDER BY nome;`

    var quantidadeportag = `SELECT nome, COUNT(fk_jogo) AS quantidade FROM tag GROUP BY nome;`

    return Promise.all([
        database.executar(totaljogos),
        database.executar(tagmaisusada),
        database.executar(graficorosca),
        database.executar(graficobarra),
        database.executar(listatags),
        database.executar(quantidadeportag)
    ]).then(function(resultados){

        return {
            totaljogos: resultados[0][0].totaljogos,
            porcentagemtag: resultados[1][0].porcentagem,
            tagmaisusada: resultados[1][0].nome,
            tags: resultados[2].map(item => item.nome),
            quantidadetags: resultados[2].map(item => item.quantidade),
            jogos: resultados[3].map(item => item.nome),
            quantidadejogos: resultados[3].map(item => item.quantidade),
            listatags: resultados[4],
            quantidadeportag: resultados[5]
        };
    });
}

module.exports = {
    dashboard
};