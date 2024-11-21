

const {Router} = require('express');
const  BetControllerMlb = require('../controllers/mlb');

const {check} = require('express-validator')




const router = Router()

router.post('/new',[
    check('name', "Se requiere el nombre del apostador").not().isEmpty(),
    check('description', "Se require apuesta").not().isEmpty(),
    check('cuota', "Se require cuota Ej: 2.0 ").not().isEmpty(),
    check('fecha', "Se require apuesta").not().isEmpty(),
    check('stake', "Se require Stake").not().isEmpty()
] ,(req, res) => BetControllerMlb.crearBet(req, res));



//Apuestas MLB

router.get('/', (req, res) => BetControllerMlb.listarBet(req, res));
router.get('/:id',(req,res) =>BetControllerMlb.editarBet(req, res));
router.get('/prediccion/:gameId',(req,res)=>BetControllerMlb.listarBetPorId(req,res))
router.put('/editar/:id',(req,res)=>BetControllerMlb.editarBet(req,res))
router.delete('/eliminar/:id',(req,res)=>BetControllerMlb.eliminarBet(req,res))

// router.post('/crear',crearMlb)
// router.get('/listar', listarMlb)

// router.get('/editar/:id', editarBet)
// router.put('/editar/:id', editarBet)


// router.delete('/eliminar/:id', eliminarBet)



module.exports = router;
