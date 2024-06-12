

const {Router} = require('express')

const { crearMlb, listarMlb, editarBet, eliminarBet } = require('../controllers/mlb')


const router = Router()




//Apuestas MLB
router.post('/crear',crearMlb)
<<<<<<< HEAD
router.get('/listar', listarMlb)
=======
router.get('/listar',  listarMlb)
>>>>>>> 44b9aa6c0575019fe4799d3c6d3e24b2cae5574b

router.get('/editar/:id', editarBet)
router.put('/editar/:id', editarBet)


router.delete('/eliminar/:id', eliminarBet)



module.exports = router;
