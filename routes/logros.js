const express = require('express');
const router = express.Router();
const logroController = require('../controller/logros.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/logro', middleware, logroController.getLogros);
router.get('/logro/:id', middleware, logroController.getLogro);
router.put('/logro', middleware, logroController.updateLogro);
router.post('/logro', middleware, logroController.insertLogro);
router.delete('/logro/:id', middleware, logroController.deleteLogro);

module.exports = router;