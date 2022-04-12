const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuario', usuarioController.getUsuarios);
router.get('/usuario/:id', usuarioController.getUsuario);
router.put('/usuario', usuarioController.updateUsuario);
router.post('/usuario', usuarioController.insertUsuario);
router.delete('/usuario/:id', usuarioController.deleteUsuario);

module.exports = router;