const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const con = mysql.createConnection({
    
    user: 'root',
    host: 'localhost',
    database: 'cantina'

});

const teste = (req, res) => {

    res.send("Back-end respondendo ");

}



const create = (req, res) => {

    let nome = req.body.nome;
    let produtos = req.body.produtos; 
    let valor = req.body.valor; 
    let quantidade = req.body.quantidade;
    let total = req.body.total;
    let data = req.body.data;
    
    let query = `INSERT INTO Salgados (nome, produtos, valor, quantidade, total, data) VALUES `;
    query += `('${nome}', '${produtos}', '${valor}', '${quantidade}', '${total}', '${data}');`;

    con.query(query, (err, result) => {

        if (err)

            res.redirect(" já está cadastrado&err=" + err.code);

        else

            res.redirect("");

    });

}

// CRUD - Read

const read = (req, res) => {

    con.query("SELECT * FROM Salgados", (err, result) => {

        if (err)

            res.json(err);

        else

            res.json(result);

    });

}

// Configurações de saída - FrontEnd

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas de Saída - FrontEnd

app.get("/", teste);
app.post("/Salgados", create);
app.get("/Salgados", read);

// Teste e porta no console

app.listen(3000, () => {

    console.log("Back-end respondendo na porta 3000");

});