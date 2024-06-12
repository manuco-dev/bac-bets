const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const usuariosSchema = Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'email es obligatorio'
    },
    nombre: {
        type: String,
        required: 'Agrega tu nombre'
    },
    password: {
        type: String,
        required: true
    }
    
},{
    timestamps: true
})


module.exports = model('Usuarios', usuariosSchema);
