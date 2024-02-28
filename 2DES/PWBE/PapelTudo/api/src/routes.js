//Dependências - Frameworks
const express = require("express");
const router = express.router();

const cliente = require("../controllers/cliente");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API lojinha respondendo ");
}

//Rotas de Saída - FrontEnd
Router.get("/", teste);
Router.post("/clientes",Cliente.create);
Router.get("/clientes",Cliente.read);
Router.put("/clientes/:id",Cliente.update);
Router.delete("/clientes/:id",Cliente.del);

module.exports = router;