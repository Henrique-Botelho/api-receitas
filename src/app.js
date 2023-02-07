const express = require('express')
const pool = require('./db');
const config = require('./config');

const app = express();

app.get("/", (req, res) => {
    res.json({message: "Bem vindo ao site API Receitas - SENAI Suíço Brasileiro"});
});

app.get(["/receitas", "/receitas/:tipo"], async (req, res) => {

    if (req.params["id"]) {
        let query = `SELECT * FROM receitas WHERE tipo="${req.params["tipo"]}"`
        const [data] = await pool.query(query);

        return res.json(data);
    } else {
        let query = "SELECT * FROM receitas";
        const [data] = await pool.query(query);
    
        return res.json(data);
    }
})

app.listen(config.PORT, () => {
    console.log("Servidor rodando na porta 3000");
})