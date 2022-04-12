const express = require('express');
const router = express.Router();
const moduloWebController = require('../controller/moduloWeb.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/modulosWeb', moduloWebController.getModulosWeb);
router.get('/moduloWebU/:id', moduloWebController.getModuloWebU);
router.get('/moduloWebP/:id', moduloWebController.getModuloWebP);
router.get('/moduloWeb', moduloWebController.getModuloWeb)
router.put('/moduloWeb', moduloWebController.updateModuloWeb);
router.post('/moduloWeb', moduloWebController.insertModuloWeb);
router.delete('/moduloWeb/:id', moduloWebController.deleteModuloWeb);

module.exports = router;