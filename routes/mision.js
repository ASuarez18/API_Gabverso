const express = require('express');
const router = express.Router();
const misionController = require('../controller/mision.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/mision', misionController.getMisiones);
router.get('/mision/:id', misionController.getMision);
router.put('/mision', misionController.updateMision);
router.post('/mision', misionController.insertMision);
router.delete('/mision/:id', misionController.deleteMision);

module.exports = router;