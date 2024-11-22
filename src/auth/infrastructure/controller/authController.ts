import express from 'express';
import { login, logout } from '@src/auth/application/service/auth.service';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - dni
 *         - password
 *       properties:
 *         dni:
 *           type: string
 *           description: El DNI único del usuario
 *         password:
 *           type: string
 *           description: La contraseña del usuario
 *       example:
 *         dni: "12345678"
 *         password: "securepassword"
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Token JWT generado para la sesión del usuario
 *       example:
 *         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTYzNzAwMDAwMH0.vZ1m7ZzT8sE8m1Wf5G5PzS4-fxJ3"
 *     LogoutRequest:
 *       type: object
 *       required:
 *         - dni
 *       properties:
 *         dni:
 *           type: string
 *           description: El DNI único del usuario que desea cerrar sesión
 *       example:
 *         dni: "12345678"
 *     LogoutResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensaje que indica que el cierre de sesión fue exitoso
 *       example:
 *         message: "Logout exitoso"
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión para un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                 message: "Credenciales incorrectas"
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

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Cierra la sesión para un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LogoutRequest'
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *               example:
 *                 message: "DNI es requerido"
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

router.post('/login', login);
router.post('/logout', logout);

export default router;
