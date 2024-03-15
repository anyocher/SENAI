const con = require('../connect/connect').con;

const create = (req, res) => {
    const {origem, destino, distancia} = req.body;
    const query = `INSERT INTO rotas(origem, destino, distancia) VALUE ('${origem}', '${destino}', '${distancia}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const read = (req, res) => {
    const query = 'SELECT * FROM rotas';
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const update = (req, res) => {
    const id = req.params.id;
    const {origem, destino, distancia} = req.body;
    const query = `UPDATE rotas SET origem = '${origem}', destino = '${destino}', distancia = '${distancia}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM rotas WHERE id = '${id}'`;
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