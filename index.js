const { dbConnection } = require('./db/config');

const express = require('express');

//Cors permite que mi cliente se conecte desde otro servidor

const cors = require('cors')

dbConnection()
require('dotenv').config()

const port = process.env.PORT || 3609;

// Crear Server

const app = express();

app.use(express.json())
app.use(cors())


// Ruta Pulic
app.use(express.static('public'))

app.use('/api/midas', require('./routes/midas'))
app.use('/api/mlb', require('./routes/mlb'))
app.use('/api/uefa', require('./routes/uefa'))
app.use('/api/uefa', require('./routes/uefa'))
app.use('/api/prediccions', require('./routes/prediccions'))



//Usuarios

app.use('/api/usuarios', require('./routes/usuarios'))

//Escuchar las peticiones
app.listen( port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
} )