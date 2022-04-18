const express = require('express');
const router = express.Router();
const temaController = require('../controller/tema.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/tema', middleware, temaController.getTemas);
router.get('/tema/:id', middleware, temaController.getTema);
router.put('/tema', middleware, temaController.updateTema);
router.post('/tema', middleware, temaController.insertTema);
router.delete('/tema/:id', middleware, temaController.deleteTema);

module.exports = router;