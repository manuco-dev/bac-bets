

const {Router} = require('express');
const BetControllerUefa = require('../controllers/uefa')

const {check} = require('express-validator')




const router = Router()

router.post('/new',[
    check('name', "Se requiere el nombre del apostador").not().isEmpty(),
    check('description', "Se require apuesta").not().isEmpty(),
    check('cuota', "Se require cuota Ej: 2.0 ").not().isEmpty(),
    check('fecha', "Se require apuesta").not().isEmpty(),
    check('stake', "Se require Stake").not().isEmpty()
] ,(req, res) => BetControllerUefa.crearBet(req, res));


//Apuestas UEFA

router.get('/', (req, res) => BetControllerUefa.listarBet(req, res));
router.get('/:id',(req,res) =>BetControllerUefa.editarBet(req, res));
router.get('/prediccion/:gameId',(req,res)=>BetControllerUefa.listarBetPorId(req,res))
router.put('/editar/:id',(req,res)=>BetControllerUefa.editarBet(req,res))
router.delete('/eliminar/:id',(req,res)=>BetControllerUefa.eliminarBet(req,res))

module.exports = router;
