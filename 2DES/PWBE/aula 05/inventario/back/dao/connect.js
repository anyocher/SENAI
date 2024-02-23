const mysql = require('mysql');

const con = mysql.createConnection({
    user: 'root',
    host: '<PASSWORD>',
    database: 'inventario'
});

module.exports = con;
