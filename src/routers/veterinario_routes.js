// importar router de express
import {Router} from 'express'
// crear una instancia de Router()
const router = Router()


import verificarAutenticacion from '../middlewares/autenticacion.js'
import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';
// importar metodos del controlados
import {
    login,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";

// definir las rutas
// ruta para el login
router.post("/login", login);
// ruta para el registro
router.post("/registro", validacionVeterinario,registro);
// ruta para confirmar el token
router.get("/confirmar/:token", confirmEmail);
// ruta para listar veterinarios
router.get("/veterinarios", listarVeterinarios);
// ruta para recuperar el password
router.get("/recuperar-password", recuperarPassword);
// ruta para recuperar el password con el token 
router.get("/recuperar-password/:token", comprobarTokenPasword);
// ruta para generar el nuevo password
router.post("/nuevo-password/:token", nuevoPassword);

// ruta para mostrar el perfil del usuario
// router.get("/perfil",verificarAutenticacion, perfil);
// ruta para actualizar el password 
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
// ruta para mostrar el detalle de un veteriario
router.get("/veterinario/:id", verificarAutenticacion,detalleVeterinario);
// ruta para actualizar el perfil
router.put("/veterinario/:id", verificarAutenticacion,actualizarPerfil);


export default router