const express = require('express');
const router = express.Router();
const maestriaController = require('../controller/maestria.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/maestria', maestriaController.getMaestrias);
router.get('/maestria/:id', maestriaController.getMaestria);
router.put('/maestria', maestriaController.updateMaestria);
router.post('/maestria', maestriaController.insertMaestria);
router.delete('/maestria/:id', maestriaController.deleteMaestria);

module.exports = router;