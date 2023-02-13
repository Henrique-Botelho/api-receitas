const express = require('express')
const pool = require('./db');
const config = require('./config');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
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