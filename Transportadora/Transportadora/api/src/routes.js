const express = require('express');
const routes = express.Router();

const cliente = require('./controllers/cliente');
const entrega = require('./controllers/entrega');
const funcionarios = require('./controllers/funcionarios');
const pedidos = require('./controllers/pedidos');
const rotas = require('./controllers/rotas');
const veiculos = require('./controllers/veiculos');

const test = (req, res) => {
    res.send('BackEnd Respondendo!')
}

// Rota de Teste
routes.get('/', test);

// Rotas dos clientes
routes.post('/cliente', cliente.create);
routes.get('/cliente', cliente.read);
routes.put("/cliente/:id", cliente.update);
routes.delete('/cliente/:id', cliente.del);

// Rotas de entrega
routes.post('/entrega', entrega.create);
routes.get('/entrega', entrega.read);
routes.put("/entrega/:id", entrega.update);
routes.delete('/entrega/:id', entrega.del);

// Rotas dos funcionários
routes.post('/funcionarios', funcionarios.create);
routes.get('/funcionarios', funcionarios.read);
routes.put("/funcionarios/:id", funcionarios.update);
routes.delete('/funcionarios/:id', funcionarios.del);

// Rotas dos pedidos
routes.post('/pedidos', pedidos.create);
routes.get('/pedidos', pedidos.read);
routes.put("/pedidos/:id", pedidos.update);
routes.delete('/pedidos/:id', pedidos.del);

// Rotas das rotas
routes.post('/rotas', rotas.create);
routes.get('/rotas', rotas.read);
routes.put("/rotas/:id", rotas.update);
routes.delete('/rotas/:id', rotas.del);

// Rotas dos veiculos
routes.post('/veiculos', veiculos.create);
routes.get('/veiculos', veiculos.read);
routes.put("/veiculos/:id", veiculos.update);
routes.delete('/veiculos/:id', veiculos.del);

module.exports = routes;