const {Router}  = require('express');
const { registrarUsuario, autenticarUsuario } = require('../controllers/usuariosController');


router = Router()

router.post('/crear-cuenta',
registrarUsuario
);


router.post('/iniciar-sesion',
autenticarUsuario
);

module.exports = router;