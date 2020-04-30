const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'hola',
    database: 'docker_mariadb'
});

function getConn() {
    try {
        const conn = pool.getConnection()
        return conn
    } catch (e) {
        console.log(e)
    }
}

module.exports = {getConn}