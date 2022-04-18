const express = require('express');
const router = express.Router();
const misionController = require('../controller/mision.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/mision', middleware, misionController.getMisiones);
router.get('/mision/:id', middleware, misionController.getMision);
router.put('/mision', middleware, misionController.updateMision);
router.post('/mision', middleware, misionController.insertMision);
router.delete('/mision/:id', middleware, misionController.deleteMision);

module.exports = router;