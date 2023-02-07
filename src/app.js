const express = require('express')
const pool = require('./db');
const config = require('./config');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/receitas", async (req, res) => {
    let query = "SELECT * FROM receitas";
    const [data] = await pool.query(query);

    return res.json(data);
})

app.listen(config.PORT, () => {
    console.log("Servidor rodando na porta 3000");
})