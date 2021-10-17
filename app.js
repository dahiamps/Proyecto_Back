const express = require('express');


const app = express();
app.use(express.json());

//1 - Invocamos a la conexion de la DB
const connection = require('./database/db');



//2 - rutas 

app.get('/', function (req, res) {
    res.send('Ruta de inicio')
})

app.get('/api/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, respuesta) => {
        if (error) {
            throw error;
        } else {
            res.send(respuesta)
        }
    })
})

app.post('/api/usuarios', (req, res) => {
    let data = { Nombre: req.body.Nombre, Usuario: req.body.Usuario, Contraseña: req.body.Contraseña, Pais: req.body.Pais, Ciudad: req.body.Ciudad, Direccion: req.body.Direccion };
    let sql = "INSERT INTO usuarios SET ?";
    connection.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results)
        }
    });
});
    // levantamos servidor 
    app.listen('3000', function () {
        console.log(`servidor OK`);
    })