const con = require('../connect/connect').con;

const create = (req, res) => {
    const {cliente_id, entrega_id, data, valor} = req.body;
    const query = `INSERT INTO pedido(cliente_id, entrega_id, data, valor) VALUE ('${cliente_id}', '${entrega_id}', '${data}', '${valor}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const read = (req, res) => {
    const query = 'SELECT * FROM pedido';
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const update = (req, res) => {
    const id = req.params.id;
    const {cliente_id, entrega_id, data, valor} = req.body;
    const query = `UPDATE pedido SET cliente_id = '${cliente_id}', entrega_id = '${entrega_id}', data = '${data}', valor = '${valor}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM pedido WHERE id = '${id}'`;
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