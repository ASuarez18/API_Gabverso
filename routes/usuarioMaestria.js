const express = require('express');
// const express = require('express');
const router = express.Router();
const usuarioMaestriaController = require('../controller/usuarioMaestria.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuarioMaestrias', middleware, usuarioMaestriaController.getUsuarioMaestrias);
router.get('/usuarioMaestriaU/:id', middleware, usuarioMaestriaController.getUsuarioMaestriaU);
router.get('/usuarioMaestriaM/:id', middleware, usuarioMaestriaController.getUsuarioMaestriaM);
router.get('/usuarioMaestria', middleware, usuarioMaestriaController.getUsuarioMaestria);
router.put('/usuarioMaestria', middleware, usuarioMaestriaController.updateUsuarioMaestria);
router.post('/usuarioMaestria', middleware, usuarioMaestriaController.insertUsuarioMaestria);
router.delete('/usuarioMaestria/:id', middleware, usuarioMaestriaController.deleteUsuarioMaestria);

module.exports = router;