const mysql = require('mysql');
const connection = mysql.createConnection({
    //Con variables de entorno
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectobd'
});

connection.connect((error) => {
    if (error) {
        throw error
    }
    console.log('¡Conectado a la Base de Datos!');
});

module.exports = connection;