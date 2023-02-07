const express = require('express')
const pool = require('./db');
const config = require('./config');

const app = express();

app.get("/", (req, res) => {
    res.json({message: "Bem vindo ao site API Receitas - SENAI Suíço Brasileiro"});
});

app.get(["/receitas", "/receitas/:tipo"], async (req, res) => {

    if(req.query.key == "4WAPlNmInAy2ZTkIAMy9") {
        if (req.params["tipo"]) {
            let query = `SELECT * FROM receitas WHERE tipo="${req.params["tipo"]}"`
            const [data] = await pool.query(query);
    
            return res.status(200).json(data);
        } else if (typeof req.params["tipo"] == Number) {
            let query = `SELECT * FROM receitas WHERE id="${req.params["id"]}"`;
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