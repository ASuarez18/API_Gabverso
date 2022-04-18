const express = require('express');
const router = express.Router();
const usuarioEmoteController = require('../controller/usuarioEmote.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuarioEmotes', middleware, usuarioEmoteController.getUsuarioEmotes);
router.get('/usuarioEmoteU/:id', middleware, usuarioEmoteController.getUsuarioEmoteU);
router.get('/usuarioEmoteE/:id', middleware, usuarioEmoteController.getUsuarioEmoteE);
router.get('/usuarioEmote', middleware, usuarioEmoteController.getUsuarioEmote);
router.put('/usuarioEmote', middleware, usuarioEmoteController.updateUsuarioEmote);
router.post('/usuarioEmote', middleware, usuarioEmoteController.insertUsuarioEmote);
router.delete('/usuarioEmote/:id', middleware, usuarioEmoteController.deleteUsuarioEmote);

module.exports = router;