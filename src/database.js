// importar mongoose
import mongoose from 'mongoose'
// Permitir que solo los campos definidos en el esquema sean almacenados
// en la base de datos
mongoose.set('strictQuery', true)
// crear una funcion llamada connection
const connection = async()=>{
    try {
        // establecer la conexion a la DB
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}
// exportar la funcion
export default  connection