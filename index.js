const { dbConnection } = require('./db/config');
const express = require('express');
const cors = require('cors');

dbConnection();
require('dotenv').config();

const port = process.env.PORT || 3609;

// Crear servidor
const app = express();

// Configurar CORS para permitir solo tu dominio
const corsOptions = {
  origin: 'https://stats-nba.netlify.app', // Especifica tu dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

// Middleware de CORS
app.use(cors(corsOptions));

// Middleware de JSON
app.use(express.json());

// Rutas de la API
app.use('/api/midas', require('./routes/midas'));
app.use('/api/mlb', require('./routes/mlb'));
app.use('/api/uefa', require('./routes/uefa'));
app.use('/api/prediccions', require('./routes/prediccions'));
app.use('/api/usuarios', require('./routes/usuarios'));

// Escuchar las peticiones
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
