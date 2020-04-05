const mysql = require('mysql');
const config = require('../config/dbConfig');
var util = require('util')

var pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    } else {
        console.log('Database connection successful.');
    }
    if (connection) connection.release()
    return
})

pool.query = util.promisify(pool.query);

module.exports = pool