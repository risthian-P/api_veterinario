import Veterinario from "../models/Veterinario.js"



// metodo para el login
const login =(req,res)=>{
    res.status(200).json({res:'login del veterinario'})
}
// ... el perfil del veterinario
const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}
// ... el registro
const registro = async (req,res)=>{
    const {email,password} = req.body
    // validar todos los campos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    // obtener los datos de la DB en base al email 
    const verificarEmailBDD = await Veterinario.findOne({email})
    // validar que el email sea nuevo
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    // crear la instancia del nuevo veterinario
    const nuevoVeterinario = new Veterinario(req.body)
    // encriptar el password
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    // crear el token => mail
    nuevoVeterinario.crearToken()
    // guardar en DB
    await nuevoVeterinario.save()
    // responder
    res.status(200).json({nuevoVeterinario})
}
// ... confirmar email de registro de veterinario
const confirmEmail = (req,res)=>{
    res.status(200).json({res:'confirmar email de registro de veterinario'})
}
// ... listar de veterinarios registrados
const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}
// ... detallar de un veterinario registrado
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un eterinario registrado'})
}
// ... actualizar perfil de un veterinario registrad
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
// ... actualizar password de un veterinario registrado
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
// ... enviar mail recuperación
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
// ... verificar token mail
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
// ... crear nuevo password
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}

// exportar cada uno de los metodos
export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}