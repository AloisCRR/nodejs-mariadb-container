const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'hola',
    database: 'docker_mariadb'
});

// This really helps https://hackernoon.com/getting-started-with-mariadb-using-docker-and-nodejs-fo433yp2

module.exports = {
    getConnection: function() {
        return new Promise(function(resolve, reject){
            pool.getConnection().then(function(connection){
                resolve(connection);
            }).catch(function(error){
                reject(error);
            });
        });
    }
}