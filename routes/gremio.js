const express = require('express');
const router = express.Router();
const gremioController = require('../controller/gremio.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/gremio', middleware, gremioController.getGremios);
router.get('/gremio/:id', gremioController.getGremio);
router.put('/gremio', gremioController.updateGremio);
router.post('/gremio', gremioController.insertGremio);
router.delete('/gremio/:id', gremioController.deleteGremio);

module.exports = router;