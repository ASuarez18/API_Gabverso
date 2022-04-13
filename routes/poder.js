const express = require('express');
const router = express.Router();
const poderController = require('../controller/poder.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/poder', poderController.getPoderes);
router.get('/poder/:id', poderController.getPoder);
router.put('/poder', poderController.updatePoder);
router.post('/poder', poderController.insertPoder);
router.delete('/poder/:id', poderController.deletePoder);

module.exports = router;