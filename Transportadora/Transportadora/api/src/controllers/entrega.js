const con  = require('../connect/connect').con;

const create = (req, res) => {
    const {id, funcionario_id, veiculo_id, rota_id, status, inicio, fim} = req.body;
    const query = `INSERT INTO entregas(id, funcionario_id, veiculo_id, rota_id, status, inicio, fim) VALUE ('${id}', '${funcionario_id}', '${veiculo_id}', '${rota_id}', '${status}', '${inicio}', '${fim}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const read = (req, res) => {
    const query = 'SELECT * FROM entregas';
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const update = (req, res) => {
    const id = req.params.id;
    const {funcionario_id, veiculo_id, rota_id, status, inicio, fim} = req.body;
    const query = `UPDATE entregas SET funcionario_id = '${funcionario_id}', veiculo_id = '${veiculo_id}', rota_id = '${rota_id}', status = '${status}', inicio = '${inicio}', fim = '${fim}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM entregas WHERE id = '${id}'`;
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