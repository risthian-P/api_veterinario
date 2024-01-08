// importar el esquema y el modelo de mongoose
import {Schema, model} from 'mongoose'
// importar bcrypt para cifrar las contraseñas
import bcrypt from "bcryptjs"
// crear los esquemas "atributos de la tabla de DB"
const veterinarioSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true //elimina los espacios en blanco
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    },
    direccion:{
        type:String,
        trim:true,
        default:null
    },
    telefono:{
        type:Number,
        trim:true,
        default:null
    },
    email:{
        type:String,
        require:true,
        trim:true,
		unique:true
    },
    password:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    },
    token:{
        type:String,
        default:null
    },
    confirmEmail:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

// Método para cifrar el password del veterinario
veterinarioSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
veterinarioSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password,this.password)
    return response
}

// Método para crear un token 
veterinarioSchema.methods.crearToken = function(){
    const tokenGenerado = this.token = Math.random().toString(36).slice(2)
    return tokenGenerado
}
// crear el modelo en base al esquema llamado veterinarioSchema
// luego exportar la tabla
export default model('Veterinario',veterinarioSchema)