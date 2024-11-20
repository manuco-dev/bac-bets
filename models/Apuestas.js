


const { Schema, model } = require('mongoose')


const ApuestaSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cuota: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    stake: {
        type: String,
        required: true
    },
    gameId: {
        type: String,
        required: false,
        default: null
    }


})

module.exports = model('Apuestas', ApuestaSchema)


