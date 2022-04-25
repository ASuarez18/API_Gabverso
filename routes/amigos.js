const express = require('express');
const router = express.Router();
const amigosController = require('../controller/amigos.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/amigos', middleware, amigosController.getAmigos);
router.get('/amigo1/:id', middleware, amigosController.getAmigoU1);
router.get('/amigo2/:id', middleware, amigosController.getAmigoU2);
router.get('/amigo', middleware, amigosController.getAmigo);
router.put('/amigo', middleware, amigosController.updateAmigos);
router.post('/amigo', middleware, amigosController.insertAmigos);
router.delete('/amigo/:id', middleware, amigosController.deleteAmigos);

module.exports = router;