const express = require('express');
const router = express.Router();
const NPCsController = require('../controller/NPCs.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/NPCs', NPCsController.getNPCs);
router.get('/NPCs/:id', NPCsController.getNPC);
router.put('/NPCs', NPCsController.updateNPC);
router.post('/NPCs', NPCsController.insertNPC);
router.delete('/NPCs/:id', NPCsController.deleteNPC);

module.exports = router;