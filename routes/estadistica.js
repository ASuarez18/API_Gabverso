const express = require('express');
const router = express.Router();
const estadisticaController = require('../controller/estadistica.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/estadistica', estadisticaController.getEstadisticas);
router.get('/estadistica/:id', estadisticaController.getEstadistica);
router.put('/estadistica', estadisticaController.updateEstadistica);
router.post('/estadistica', estadisticaController.insertEstadistica);
router.delete('/estadistica/:id', estadisticaController.deleteEstadistica);

module.exports = router;