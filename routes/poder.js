const express = require('express');
const router = express.Router();
const poderController = require('../controller/poder.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/poder', middleware, poderController.getPoderes);
router.get('/poder/:id', middleware, poderController.getPoder);
router.put('/poder', middleware, poderController.updatePoder);
router.post('/poder', middleware, poderController.insertPoder);
router.delete('/poder/:id', middleware, poderController.deletePoder);

module.exports = router;