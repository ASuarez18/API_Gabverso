const express = require('express');
const router = express.Router();
const preguntaController = require('../controller/pregunta.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/pregunta', preguntaController.getPreguntas);
router.get('/pregunta/:id', preguntaController.getPregunta);
router.put('/pregunta', preguntaController.updatePregunta);
router.post('/pregunta', preguntaController.insertPregunta);
router.delete('/pregunta/:id', preguntaController.deletePregunta);

module.exports = router;