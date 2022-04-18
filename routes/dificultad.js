const express = require('express');
const router = express.Router();
const dificultadController = require('../controller/dificultad.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/dificultad', middleware, dificultadController.getDificultades);
router.get('/dificultad/:id', middleware, dificultadController.getDificultad);
router.put('/dificultad', middleware, dificultadController.updateDificultad);
router.post('/dificultad', middleware, dificultadController.insertDificultad);
router.delete('/dificultad/:id', middleware, dificultadController.deleteDificultad);

module.exports = router;