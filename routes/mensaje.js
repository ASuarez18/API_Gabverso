const express = require('express');
const router = express.Router();
const mensajeController = require('../controller/mensaje.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/mensajeR/:id', middleware, mensajeController.getMensajeR);
router.get('/mensajeD/:id', middleware, mensajeController.getMensajeD);
router.post('/mensaje', middleware, mensajeController.insertMensaje);
router.delete('/mensaje', middleware, mensajeController.deleteMensaje);

module.exports = router;