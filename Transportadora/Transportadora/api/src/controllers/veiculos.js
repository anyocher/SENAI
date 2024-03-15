const con = require('../connect/connect').con;

const create = (req, res) => {
    const {placa, modelo, capacidade} = req.body;
    const query = `INSERT INTO veiculos(placa, modelo, capacidade) VALUE ('${placa}', '${modelo}', '${capacidade}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const read = (req, res) => {
    const query = 'SELECT * FROM veiculos';
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const update = (req, res) => {
    const id = req.params.id;
    const {placa, modelo, capacidade} = req.body;
    const query = `UPDATE veiculos SET placa = '${placa}', modelo = '${modelo}', capacidade = '${capacidade}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM veiculos WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

module.exports = {
    create,
    read,
    update,
    del
}