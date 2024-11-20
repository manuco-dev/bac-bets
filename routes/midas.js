

const {Router} = require('express')
const { crearBet, listarBet, editarBet, eliminarBet, listarBetPorId } = require('../controllers/midas')
const { check } = require('express-validator')
const auth = require('../middlewares/auth')

const router = Router()

router.post('/new',[
    check('name', "Se requiere el nombre del apostador").not().isEmpty(),
    check('description', "Se require apuesta").not().isEmpty(),
    check('cuota', "Se require cuota Ej: 2.0 ").not().isEmpty(),
    check('fecha', "Se require apuesta").not().isEmpty(),
    check('stake', "Se require Stake").not().isEmpty()
] ,crearBet)

//Apuestas NBA
router.get('/', listarBet)
router.get('/:gameId', listarBetPorId)
router.get('/:id', editarBet)
router.put('/editar/:id', editarBet)
router.delete('/eliminar/:id', eliminarBet)

//Apuestas MLB



module.exports = router;
