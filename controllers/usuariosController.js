const {response} = require('express')
const Usuarios = require('../models/Usuarios')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const registrarUsuario = async (req, res = response) => {
    const usuario = new Usuarios(req.body);
    try {

        console.log(usuario)
        // Generar la sal y el hash de la contraseña
        const salt = await bcrypt.genSalt(12);

        usuario.password = await bcrypt.hash(usuario.password, salt);

        // Guardar el usuario en la base de datos
        await usuario.save();

        // Enviar respuesta exitosa
        res.json({
            ok: true,
            mensaje: 'Usuario creado correctamente'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            mensaje: 'Hubo un error'
        });
    }
};


const autenticarUsuario = async (req, res, next)=>{

    const {email, password} = req.body;

    const usuario = await Usuarios.findOne({email})
    
    if(!usuario){
        res.status(401).json({
            ok: true,
            mensaje: 'Usuario no existe'
        })

    }else{  
        if(!bcrypt.compareSync(password, usuario.password)){
        await res.status(401).json({mensaje: 'Password incorrecto'})
        next();
        }else{
            const token = jwt.sign({
                email: usuario.email,
                usuario: usuario.nombre,
                _id: usuario._id
            }, 'LLAVESECRETA',
            {
                expiresIn: '2h'
            })
            res.json({token})
        }
    }

}


module.exports = {
    registrarUsuario,
    autenticarUsuario
}


 
