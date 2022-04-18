const express = require('express');
const router = express.Router();
const usuarioMisionController = require('../controller/usuarioMision.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuarioMisiones', middleware, usuarioMisionController.getUsuarioMisiones);
router.get('/usuarioMisionU/:id', middleware, usuarioMisionController.getUsuarioMisionU);
router.get('/usuarioMisionM/:id', middleware, usuarioMisionController.getUsuarioMisionM);
router.get('/usuarioMision', middleware, usuarioMisionController.getUsuarioMision);
router.put('/usuarioMision', middleware, usuarioMisionController.updateUsuarioMision);
router.post('/usuarioMision', middleware, usuarioMisionController.insertUsuarioMision);
router.delete('/usuarioMision/:id', middleware, usuarioMisionController.deleteUsuarioMision);

module.exports = router;