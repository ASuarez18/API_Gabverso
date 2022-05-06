const express = require('express');
const router = express.Router();
const preguntaController = require('../controller/pregunta.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/preguntas', middleware, preguntaController.getPreguntas);
router.get('/pregunta/:id', middleware, preguntaController.getPregunta);
router.put('/pregunta', middleware, preguntaController.updatePregunta);
router.post('/pregunta', middleware, preguntaController.insertPregunta);
router.delete('/pregunta/:id', middleware, preguntaController.deletePregunta);

module.exports = router;