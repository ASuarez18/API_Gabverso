const express = require('express');
const router = express.Router();
const dificultadController = require('../controller/dificultad.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/dificultad', dificultadController.getDificultades);
router.get('/dificultad/:id', dificultadController.getDificultad);
router.put('/dificultad', dificultadController.updateDificultad);
router.post('/dificultad', dificultadController.insertDificultad);
router.delete('/dificultad/:id', dificultadController.deleteDificultad);

module.exports = router;