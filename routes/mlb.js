

const {Router} = require('express')

const { crearMlb, listarMlb, editarBet, eliminarBet } = require('../controllers/mlb')


const router = Router()




//Apuestas MLB
router.post('/crear',crearMlb)
router.get('/listar', listarMlb)

router.get('/editar/:id', editarBet)
router.put('/editar/:id', editarBet)


router.delete('/eliminar/:id', eliminarBet)



module.exports = router;
