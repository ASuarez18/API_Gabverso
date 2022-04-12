const express = require('express');
// const express = require('express');
const router = express.Router();
const usuarioMaestriaController = require('../controller/usuarioMaestria.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuarioMaestrias', usuarioMaestriaController.getUsuarioMaestrias);
router.get('/usuarioMaestriaU/:id', usuarioMaestriaController.getUsuarioMaestriaU);
router.get('/usuarioMaestriaM/:id', usuarioMaestriaController.getUsuarioMaestriaM);
router.get('/usuarioMaestria', usuarioMaestriaController.getUsuarioMaestria);
router.put('/usuarioMaestria', usuarioMaestriaController.updateUsuarioMaestria);
router.post('/usuarioMaestria', usuarioMaestriaController.insertUsuarioMaestria);
router.delete('/usuarioMaestria/:id', usuarioMaestriaController.deleteUsuarioMaestria);

module.exports = router;