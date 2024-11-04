var knex = require('knex');
var knexConfig = require('../config/knex');
var conn;
function conectar() {
    if (conn) {
        return conn;
    }
    conn = knex(knexConfig);
    return conn;
}
module.exports = conectar();
