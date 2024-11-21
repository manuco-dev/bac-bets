// controllers/BetController.js
const BetControllerBase = require('./BetControllerBase');
const Apuestas = require('../models/Apuestas'); // Modelo específico para esta clase

class BetController extends BetControllerBase {
    constructor() {
        super(Apuestas); // Pasa el modelo `Apuestas` al constructor de la clase base
    }

    
    
}

module.exports = new BetController();
