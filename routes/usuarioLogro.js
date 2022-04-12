const express = require('express');
const router = express.Router();
const usuarioLogroController = require('../controller/usuarioLogro.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuarioLogros', usuarioLogroController.getUsuarioLogros);
router.get('/usuarioLogroU/:id', usuarioLogroController.getUsuarioLogroU);
router.get('/usuarioLogroL/:id', usuarioLogroController.getUsuarioLogroL);
router.get('/usuarioLogro', usuarioLogroController.getUsuarioLogro);
router.put('/usuarioLogro', usuarioLogroController.updateUsuarioLogro);
router.post('/usuarioLogro', usuarioLogroController.insertUsuarioLogro);
router.delete('/usuarioLogro/:id', usuarioLogroController.deleteUsuarioLogro);

module.exports = router;