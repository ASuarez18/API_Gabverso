const express = require('express');
const router = express.Router();
const emoteController = require('../controller/emote.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/emote', middleware, emoteController.getEmotes);
router.get('/emote/:id', middleware, emoteController.getEmote);
router.put('/emote', middleware, emoteController.updateEmote);
router.post('/emote', middleware, emoteController.insertEmote);
router.delete('/emote/:id', middleware, emoteController.deleteEmote);

module.exports = router;