const express = require('express');
const router = express.Router();
const usuarioEmoteController = require('../controller/usuarioEmote.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuarioEmotes', usuarioEmoteController.getUsuarioEmotes);
router.get('/usuarioEmoteU/:id', usuarioEmoteController.getUsuarioEmoteU);
router.get('/usuarioEmoteE/:id', usuarioEmoteController.getUsuarioEmoteE);
router.get('/usuarioEmote', usuarioEmoteController.getUsuarioEmote);
router.put('/usuarioEmote', usuarioEmoteController.updateUsuarioEmote);
router.post('/usuarioEmote', usuarioEmoteController.insertUsuarioEmote);
router.delete('/usuarioEmote/:id', usuarioEmoteController.deleteUsuarioEmote);

module.exports = router;