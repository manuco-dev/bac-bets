const BetControllerBase = require('./BetControllerBase')

const Uefa = require('../models/ApuestasUefa')


class BetControllerUefa extends BetControllerBase {
    constructor(){
        super(Uefa)
    }


}

module.exports = new BetControllerUefa();