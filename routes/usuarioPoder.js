const express = require('express');
const router = express.Router();
const usuarioPoderController = require('../controller/usuarioPoder.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuarioPoderes', usuarioPoderController.getUsuarioPoderes);
router.get('/usuarioPoderU/:id', usuarioPoderController.getUsuarioPoderU);
router.get('/usuarioPoderP/:id', usuarioPoderController.getUsuarioPoderP);
router.get('/usuarioPoder', usuarioPoderController.getUsuarioPoder);
router.put('/usuarioPoder', usuarioPoderController.updateUsuarioPoder);
router.post('/usuarioPoder', usuarioPoderController.insertUsuarioPoder);
router.delete('/usuarioPoder/:id', usuarioPoderController.deleteUsuarioPoder);

module.exports = router;