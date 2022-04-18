const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

const middleware = '../middleware/jwt-middleware.js';

router.get('/usuario', middleware, usuarioController.getUsuarios);
router.get('/usuario/:id', middleware, usuarioController.getUsuario);
router.put('/usuario', middleware, usuarioController.updateUsuario);
router.post('/usuario', middleware, usuarioController.insertUsuario);
router.delete('/usuario/:id', middleware, usuarioController.deleteUsuario);

module.exports = router;