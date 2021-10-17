const express = require('express');


const app = express();


//1 - Invocamos a la conexion de la DB
const connection = require('./database/db');



//2 - rutas 

app.get('/', function (req, res) {
    res.send('Ruta de inicio')
})

app.get('/api/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, respuesta) => {
        if(error){
            throw error;
        } else {
            res.send(respuesta)
        }
    })
})
// levantamos servidor 
app.listen('3000', function () {
    console.log(`servidor OK`);
})