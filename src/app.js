const express = require('express')
const pool = require('./db');
const config = require('./config');

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Bem vindo ao site API Receitas - Henrique Botelho",
        como_usar: "Acesse a URI 'https://receitas3dm.up.railway.app/receitas' para pegar todas as receitas. Acesse a URI 'https://receitas3dm.up.railway.app/receitas/<NOME_DO_TIPO>' para pegar a lista das receitas do tipo <NOME_DO_TIPO>.",
        chave_acesso: "Para ter acesso aos recursos, uma chave tem que ser passada na URL no parâmetro 'key'.",
        exemplo: "https://receitas3dm.up.railway.app/receitas?key=turma3dm"
    });
});

app.get(["/receitas", "/receitas/:tipo"], async (req, res) => {

    // Key de acesso para a API
    if(req.query.key == config.KEY_ACCESS) {
        if (req.params["tipo"]) {
            let query = `SELECT * FROM receitas WHERE tipo="${req.params["tipo"]}"`
            const [data] = await pool.query(query);
    
            return res.status(200).json(data);
        } else {
            let query = "SELECT * FROM receitas";
            const [data] = await pool.query(query);
        
            return res.status(200).json(data);
        }
    } else {
        return res.json({message: "Você não tem acesso a esse recurso!"});
    }

})

app.listen(config.PORT, () => {
    console.log("Servidor rodando na porta 3000");
})