const express = require('express');
const router = express.Router();
const NPCsController = require('../controller/NPCs.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/NPCs', middleware, NPCsController.getNPCs);
router.get('/NPCs/:id', middleware, NPCsController.getNPC);
router.put('/NPCs', middleware, NPCsController.updateNPC);
router.post('/NPCs', middleware, NPCsController.insertNPC);
router.delete('/NPCs/:id', middleware, NPCsController.deleteNPC);

module.exports = router;