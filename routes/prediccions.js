const { Router } = require('express');
const { check } = require('express-validator');
const { crearPrediccion, listarPre } = require('../controllers/prediccions');
const { validationResult } = require('express-validator'); // Para manejar errores de validación

const router = Router();

router.post(
  '/new',
  [
    check('team', 'El nombre del equipo es obligatorio').not().isEmpty(),
    check('description', 'La descripción de la apuesta es obligatoria').not().isEmpty(),
    check('stake', 'El stake de la apuesta es obligatorio').not().isEmpty(),
    check('stake', 'El stake debe ser un número positivo').isFloat({ gt: 0 }),
    check('date', 'La fecha no es válida')
      .optional() // La fecha es opcional
      .isISO8601(), // Valida que sea una fecha en formato ISO 8601
  ],
  async (req, res) => {
    // Manejo de errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.array(),
      });
    }

    // Llama al controlador
    crearPrediccion(req, res);
  }
);

router.get('/', listarPre)

module.exports = router;
