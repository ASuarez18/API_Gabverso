const express = require('express');
const router = express.Router();
const emoteController = require('../controller/emote.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/emote', emoteController.getEmotes);
router.get('/emote/:id', emoteController.getEmote);
router.put('/emote', emoteController.updateEmote);
router.post('/emote', emoteController.insertEmote);
router.delete('/emote/:id', emoteController.deleteEmote);

module.exports = router;