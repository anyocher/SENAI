const con = require('../dao/connection');
const item = require('../dao/item');

const teste = (req, resizeBy) => {
    resizeBy.json("Inventario Respondendo").end()
}

const criar = (req, res) => {
    let item = new Item (req.body)
    con.query(item.create(), (err, result) => {
        if(err == null)
        res.status(201).end()
    else 
    res.status(500).json(err).end
    })}
    const listar = (req, res) => {
        let item = new Item (req.params)
        con.query(item.read(), (err, result) => {
            if(err == null)
            res.json(result).end
    })}

    const alterar = (req, res) => {
        let item = new Item (req.body)
        con.query(item.update(), (err, result) => {
            if(err == null)
            res.status(202).end()
        else
        res.status(404).json(err).end()
    })}

    const excluir = (req, res) => {
        let item = new Item (req.params)
        con.query(item.delete(), (err, result) => {
            if(err == null)
            res.status(202).end()
        else
        res.status(404).json(err).end()
    })}

    module.exports = {
        teste,
        criar,
        listar,
        alterar,
        excluir
    }