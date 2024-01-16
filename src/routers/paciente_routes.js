import {Router} from 'express'
import {
    actualizarPaciente,
    detallePaciente,
    eliminarPaciente,
    listarPacientes,
    registrarPaciente,
    loginPaciente,
    perfilPaciente 
} from "../controllers/paciente_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";
const router = Router()

// ruta para proceso de login
router.post('/paciente/login',loginPaciente)

// ... ver perfil
router.get('/paciente/perfil',verificarAutenticacion,perfilPaciente)
// .. listar todos los pacientes
router.get('/pacientes',verificarAutenticacion,listarPacientes)
// ... ver el detalle de un paciente en particular
router.get('/paciente/:id',verificarAutenticacion,detallePaciente)
// ... registrar un paciente
router.post('/paciente/registro',verificarAutenticacion,registrarPaciente)
// actualizar un paciente
router.put('/paciente/actualizar/:id',verificarAutenticacion,actualizarPaciente)
// ... eliminar (dar de baja) un paciente
router.delete('/paciente/eliminar/:id',verificarAutenticacion,eliminarPaciente)

export default router