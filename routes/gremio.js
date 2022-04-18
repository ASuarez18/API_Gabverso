const express = require('express');
const router = express.Router();
const gremioController = require('../controller/gremio.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/gremio', middleware, gremioController.getGremios);
router.get('/gremio/:id', middleware, gremioController.getGremio);
router.put('/gremio', middleware, gremioController.updateGremio);
router.post('/gremio', middleware, gremioController.insertGremio);
router.delete('/gremio/:id', middleware, gremioController.deleteGremio);

module.exports = router;