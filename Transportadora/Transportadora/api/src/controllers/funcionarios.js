const con = require('../connect/connect').con;

const create = (req, res) => {
    const {nome, cargo, salario} = req.body;
    const query = `INSERT INTO funcionarios(nome, cargo, salario) VALUE ('${nome}', '${cargo}', '${salario}')`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
}

const read = (req, res) => {
    const query = 'SELECT * FROM funcionarios';
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const update = (req, res) => {
    const id = req.params.id;
    const {nome, cargo, salario} = req.body;
    const query = `UPDATE funcionarios SET nome = '${nome}', cargo = '${cargo}', salario = '${salario}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
}

const del = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM funcionarios WHERE id = '${id}'`;
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