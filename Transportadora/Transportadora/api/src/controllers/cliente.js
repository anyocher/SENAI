const con = require('../connect/connect').con;

const create = (req, res) => {
    let {name, email, telefone, endereco} = req.body;

    let query = `INSERT INTO cliente (nome, email, telefone, endereco) VALUES ('${name}', '${email}', '${telefone}', '${endereco}')`;
    con.query(query, (err, result) => {
        err ? res.json(err).end() : res.json(result).end();
        });
}


const read = (req, res) => {
    con.query('SELECT * FROM cliente', (err, result) => {
        err ? res.json(err) : res.json(result);
    });
};

const update = (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;;
    const endereco = req.body.endereco;

    let query = `UPDATE cliente SET nome = '${nome}', email = '${email}', endereco = '${endereco}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.json(err).end();
        } else {
            result.affectedRows > 0 ? res.json(result).end() : res.json({error: 'Item não encontrado!'}).end();
        }
    });
};

const del = (req, res) => {
    const id = req.params.id;

    let query = `DELETE FROM cliente WHERE id='${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.json(err).end();
        } else {
            result.affectedRows > 0 ? res.json(result).end() : res.json('Item não encontrado!').end();
        }
    });
};

module.exports = {
    create,
    read,
    update,
    del
}