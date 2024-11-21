// controllers/BetControllerBase.js
const { validationResult } = require('express-validator');
const { response } = require('express');

class BetControllerBase {
    constructor(model) {
        this.model = model; // Asigna el modelo pasado por la clase hija
    }

    async crearBet(req, res = response) {
        try {
            // Validación de datos
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    ok: false,
                    errors: errors.array()
                });
            }

            // Creación de la apuesta
            const apuesta = new this.model(req.body);
            await apuesta.save();

            // Respuesta exitosa
            return res.status(201).json({
                ok: true,
                mensaje: 'Se agregó nueva apuesta',
                apuesta
            });
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({
                ok: false,
                mensaje: 'Hubo un error al agregar la apuesta'
            });
        }
    }

    async listarBetPorId(req, res) {
        const { gameId } = req.params;
        try {
            const apuesta = await this.model.find({ gameId });
            if (!apuesta) {
                return res.status(404).json({
                    ok: false,
                    mensaje: `No se encontró una apuesta con el Game ID: ${gameId}`
                });
            }
            return res.status(200).json({
                ok: true,
                apuesta
            });
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({
                ok: false,
                mensaje: 'Hubo un error al obtener la apuesta'
            });
        }
    }

    async listarBet(req, res) {
        try {
            // Obtención de las apuestas
            const listar = await this.model.find({});

            // Respuesta exitosa
            return res.status(200).json({
                ok: true,
                listar
            });
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({
                ok: false,
                mensaje: 'Hubo un error al obtener las apuestas'
            });
        }
    }

    async editarBet(req, res) {
        try {
            const id = req.params.id;
            const updatedBet = await this.model.findOneAndUpdate({ _id: id }, req.body, {
                new: true,
                runValidators: true
            });

            if (!updatedBet) {
                return res.status(404).json({ message: 'Apuesta no encontrada' });
            }

            res.json({ bet: updatedBet });
        } catch (error) {
            console.error('Error al editar la apuesta:', error);
            res.status(500).json({ ok: false, mensaje: 'Error al editar la apuesta' });
        }
    }

    async eliminarBet(req, res = response) {
        try {
            const { id } = req.params;
            let bet = await this.model.findByIdAndDelete(id);

            if (!bet) {
                return res.status(404).json({
                    ok: false,
                    mensaje: 'Apuesta no encontrada'
                });
            }

            res.status(200).json({
                ok: true,
                mensaje: 'Registro eliminado'
            });
        } catch (error) {
            console.error('Error al eliminar la apuesta:', error);
            res.status(500).json({
                ok: false,
                mensaje: 'Error al eliminar'
            });
        }
    }
}

module.exports = BetControllerBase;
