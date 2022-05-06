const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuario', middleware, usuarioController.getUsuarios);
router.get('/usuario/:id', middleware, usuarioController.getUsuario);
router.get('/usuarioOe', middleware, usuarioController.getUsuarioOe);
router.get('/usuarioOp', middleware, usuarioController.getUsuarioOp);
router.put('/usuario', middleware, usuarioController.updateUsuario);
router.put('/punto', usuarioController.increasePuntos);
router.put('/experiencia', usuarioController.increaseExperiencia);
router.post('/usuario', middleware, usuarioController.insertUsuario);
router.delete('/usuario/:id', middleware, usuarioController.deleteUsuario);

module.exports = router;