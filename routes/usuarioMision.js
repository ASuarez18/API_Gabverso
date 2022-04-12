const express = require('express');
const router = express.Router();
const usuarioMisionController = require('../controller/usuarioMision.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuarioMisiones', usuarioMisionController.getUsuarioMisiones);
router.get('/usuarioMisionU/:id', usuarioMisionController.getUsuarioMisionU);
router.get('/usuarioMisionM/:id', usuarioMisionController.getUsuarioMisionM);
router.get('/usuarioMision', usuarioMisionController.getUsuarioMision);
router.put('/usuarioMision', usuarioMisionController.updateUsuarioMision);
router.post('/usuarioMision', usuarioMisionController.insertUsuarioMision);
router.delete('/usuarioMision/:id', usuarioMisionController.deleteUsuarioMision);

module.exports = router;