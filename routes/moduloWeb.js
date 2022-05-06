const express = require('express');
const router = express.Router();
const moduloWebController = require('../controller/moduloWeb.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/modulosWeb', middleware, moduloWebController.getModulosWeb);
router.get('/moduloWebU/:id', middleware, moduloWebController.getModuloWebU);
router.get('/moduloWebUPT/:id', middleware, moduloWebController.getModuloWebUPT);
router.get('/moduloWebP/:id', middleware, moduloWebController.getModuloWebP);
router.get('/moduloWeb', middleware, moduloWebController.getModuloWeb)
router.get('/totalP/:id', middleware, moduloWebController.getPreguntaTot)
router.put('/moduloWeb', middleware, moduloWebController.updateModuloWeb);
router.post('/websection', middleware, moduloWebController.insertSeccion);
router.post('/moduloWeb', middleware, moduloWebController.insertModuloWeb);
router.delete('/moduloWeb/:id', middleware, moduloWebController.deleteModuloWeb);

module.exports = router;