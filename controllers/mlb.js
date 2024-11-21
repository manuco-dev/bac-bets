const BetControllerBase = require("./BetControllerBase");

const Mlb = require('../models/ApuestasMlb')

class BetControllerMlb extends BetControllerBase{
    constructor(){
        super(Mlb)
    }
}


module.exports = new BetControllerMlb();