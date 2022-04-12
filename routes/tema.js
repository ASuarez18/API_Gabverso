const express = require('express');
const router = express.Router();
const temaController = require('../controller/tema.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/tema', temaController.getTemas);
router.get('/tema/:id', temaController.getTema);
router.put('/tema', temaController.updateTema);
router.post('/tema', temaController.insertTema);
router.delete('/tema/:id', temaController.deleteTema);

module.exports = router;