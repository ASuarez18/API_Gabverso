const express = require('express');
const router = express.Router();
const estadisticaController = require('../controller/estadistica.controller');

const middleware = '../middleware/jwt-middleware.js';

router.get('/estadistica', middleware, estadisticaController.getEstadisticas);
router.get('/estadistica/:id', middleware, estadisticaController.getEstadistica);
router.put('/estadistica', middleware, estadisticaController.updateEstadistica);
router.post('/estadistica', middleware, estadisticaController.insertEstadistica);
router.delete('/estadistica/:id', middleware, estadisticaController.deleteEstadistica);

module.exports = router;