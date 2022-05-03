const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuario', middleware, usuarioController.getUsuarios);
router.get('/usuario/:id', middleware, usuarioController.getUsuario);
router.get('/usuarioO', middleware, usuarioController.getUsuarioO);
router.put('/usuario', middleware, usuarioController.updateUsuario);
router.put('/punto', usuarioController.increasePuntos);
router.post('/usuario', middleware, usuarioController.insertUsuario);
router.delete('/usuario/:id', middleware, usuarioController.deleteUsuario);

module.exports = router;