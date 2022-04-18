const express = require('express');
const router = express.Router();
const maestriaController = require('../controller/maestria.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/maestria', middleware, maestriaController.getMaestrias);
router.get('/maestria/:id', middleware, maestriaController.getMaestria);
router.put('/maestria', middleware, maestriaController.updateMaestria);
router.post('/maestria', middleware, maestriaController.insertMaestria);
router.delete('/maestria/:id', middleware, maestriaController.deleteMaestria);

module.exports = router;