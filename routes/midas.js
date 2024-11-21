

const {Router} = require('express')

const BetController = require('../controllers/midas')
const { check } = require('express-validator')


const router = Router()

router.post('/new',[
    check('name', "Se requiere el nombre del apostador").not().isEmpty(),
    check('description', "Se require apuesta").not().isEmpty(),
    check('cuota', "Se require cuota Ej: 2.0 ").not().isEmpty(),
    check('fecha', "Se require apuesta").not().isEmpty(),
    check('stake', "Se require Stake").not().isEmpty()
] ,(req, res) => BetController.crearBet(req, res));

//Apuestas NBA

router.get('/', (req, res) => BetController.listarBet(req, res));
router.get('/:id',(req,res) =>BetController.editarBet(req, res));
router.get('/prediccion/:gameId',(req,res)=>BetController.listarBetPorId(req,res))
router.put('/editar/:id',(req,res)=>BetController.editarBet(req,res))
router.delete('/eliminar/:id',(req,res)=>BetController.eliminarBet(req,res))

// router.get('/', BetController.listarBet)
// router.get('/:id', BetController.editarBet)
// router.get('/prediccion/:gameId', BetController.listarBetPorId)
// router.put('/editar/:id', BetController.editarBet)
// router.delete('/eliminar/:id', BetController.eliminarBet)

//Apuestas MLB



module.exports = router;
