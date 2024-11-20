const { response } = require('express');

const Prediccions = require('../models/Prediccions')

const crearPrediccion = async (req, res = response) => {
    try {
        // Accede a los datos enviados en el cuerpo de la solicitud
        const { team, description, stake , date, gameId} = req.body;

        // Verifica si los datos existen (esto refuerza la validación previa)
        if (!team || !description || !stake || !date) {
            return res.status(400).json({
                ok: false,
                msg: 'Todos los campos son obligatorios (team, description, stake, date)'
            });
        }

        //Creación de la apuesta y guardar en la BD

        const apuesta = new Prediccions(req.body)
        await apuesta.save()

        // Respuesta exitosa
        res.status(201).json({
            ok: true,
            msg: 'Predicción creada exitosamente',
            prediccion: {
                team,
                description,
                stake,
                date,
                gameId
            }
        });

    } catch (error) {
        console.error(error); // Log del error en el servidor
        return res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    }
};

const listarPre = async (req, res = response) =>{

    try {
        const listar = await Prediccions.find({})

        return res.status(200).json({
            ok: true,
            msg: 'Listado Exitosamente',
            listar
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Contacta al Admin'
        })
        
    }

}

module.exports = {
    crearPrediccion,
    listarPre
};
