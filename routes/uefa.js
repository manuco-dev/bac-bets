

const {Router} = require('express');
const { crearUefa, listarUefa, editarUefa, eliminarUefa } = require('../controllers/uefa');


const router = Router()




//Apuestas MLB
router.post('/crear', crearUefa)
router.get('/listar', listarUefa)

router.get('/editar/:id', editarUefa)
router.put('/editar/:id', editarUefa)


router.delete('/eliminar/:id', eliminarUefa)


module.exports = router;
