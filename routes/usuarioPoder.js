const express = require('express');
const router = express.Router();
const usuarioPoderController = require('../controller/usuarioPoder.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuarioPoderes', middleware, usuarioPoderController.getUsuarioPoderes);
router.get('/usuarioPoderU/:id', middleware, usuarioPoderController.getUsuarioPoderU);
router.get('/usuarioPoderP/:id', middleware, usuarioPoderController.getUsuarioPoderP);
router.get('/usuarioPoder', middleware, usuarioPoderController.getUsuarioPoder);
router.put('/usuarioPoder', middleware, usuarioPoderController.updateUsuarioPoder);
router.post('/usuarioPoder', middleware, usuarioPoderController.insertUsuarioPoder);
router.delete('/usuarioPoder/:id', middleware, usuarioPoderController.deleteUsuarioPoder);

module.exports = router;