const { validationResult } = require('express-validator');

const { response } =require('express');
const ApuestasUefa = require('../models/ApuestasUefa');



const crearUefa= async (req, res = response) => {
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
        const apuesta = new ApuestasUefa(req.body);
        await apuesta.save();

        // Respuesta exitosa
        return res.status(201).json({
            ok: true,
            mensaje: 'Se agregó nueva apuesta',
            apuesta
        });
    } catch (error) {
        // Manejo de errores
        console.error(error.message);
        return res.status(500).json({
            ok: false,
            mensaje: 'Hubo un error al agregar la apuesta'
        });
    }
};

const listarUefa = async (req, res) => {
    try {
        // Obtención de las apuestas
        const listar = await ApuestasUefa.find({});
            

        // Respuesta exitosa
        return res.status(200).json({
            ok: true,
            listar
        });
    } catch (error) {
        // Manejo de errores
        console.error(error.message);
        return res.status(500).json({
            ok: false,
            mensaje: 'Hubo un error al obtener las apuestas'
        });
    }
};

const editarUefa = async (req, res, next) => {
    try {
        const  id  = req.params.id;
        const updatedBet = await ApuestasUefa.findOneAndUpdate({ _id: id }, req.body, {
            new: true, // Devolver la versión actualizada de la apuesta
            runValidators: true // Ejecutar las validaciones del modelo
        });

        if (!updatedBet) {
            return res.status(404).json({ message: 'Apuesta no encontrada' });
        }

        // Devolver la apuesta actualizada
        res.json({ bet: updatedBet });
    } catch (error) {
        // Manejar errores
        console.error('Error al editar la apuesta:', error);
        next(error); // Pasar el error al siguiente middleware o controlador de errores
    }
};

const eliminarUefa = async (req,res = response)=>{
    try {
        const { id } = req.params;
        let bet = await ApuestasUefa.findByIdAndDelete( id );

        if(!bet){
            return res.status(404).json({
                ok:false,
                mensaje: 'Apuesta no Encontrada'
            })
        }

        res.status(200).json({
            ok: true,
            mensaje: 'Registro eliminado'
        })



    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            mensaje: 'Error al eliminar'
        })
    }

    


}


module.exports = {
    crearUefa,
    listarUefa,
    editarUefa,
    eliminarUefa
    
}