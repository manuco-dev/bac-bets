const moongose = require('mongoose');



const dbConnection = async ()=>{

    try {
        moongose.connect('mongodb+srv://comanuel7:Mamba198812@calendario.wgpurmj.mongodb.net/?retryWrites=true&w=majority&appName=Calendario');
        console.log('Db Online')
    } catch (error) {
        console.log(error)
        throw new Error('Error al inicializar base de datos')
    }

}


module.exports = {
    dbConnection
}