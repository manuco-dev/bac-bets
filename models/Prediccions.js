const { Schema, model } = require('mongoose');

const PrediccionsSchema = Schema({
    team: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stake: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false, // No es obligatorio
        default: null    // Si no se asigna, queda como null
    },
    gameId: {
        type: String,
        required: false,
        default: null
    }
});

module.exports = model('Prediccions', PrediccionsSchema);
