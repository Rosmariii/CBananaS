import express from 'express';
import { createUser } from '@src/user/application/service/user.service';

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserRequest:
 *       type: object
 *       required:
 *         - dni
 *         - name
 *       properties:
 *         dni:
 *           type: string
 *           description: El DNI único del usuario
 *         name:
 *           type: string
 *           description: Nombre completo del usuario

 *       example:
 *         dni: "12345678"
 *         name: "John Doe"
 *         password: "securepassword"
 *     CreateUserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único del usuario creado (UUID)
 *         dni:
 *           type: string
 *           description: El DNI del usuario
 *         name:
 *           type: string
 *           description: Nombre completo del usuario
 *         create_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del usuario
 *       example:
 *         id: "2b27b670-8f49-4a5a-a6bf-44dc0946626f"
 *         dni: "12345678"
 *         name: "John Doe"
 *         create_at: "2024-11-20T22:00:00Z"
 */

/**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Crea un nuevo usuario en la base de datos
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponse'
 *       400:
 *         description: Error en los datos de entrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                 message: "Faltan campos requeridos en el cuerpo de la solicitud"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                 message: "Error interno del servidor"
 */

router.post('/createUser', createUser);

export default router;
