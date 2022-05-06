const express = require('express');
const router = express.Router();
const usuarioLogroController = require('../controller/usuarioLogro.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuarioLogros', middleware, usuarioLogroController.getUsuarioLogros);
router.get('/usuarioLogroU/:id', middleware, usuarioLogroController.getUsuarioLogroU);
router.get('/usuarioLogroL/:id', middleware, usuarioLogroController.getUsuarioLogroL);
router.get('/tot/:id', middleware, usuarioLogroController.getLogroTot);
router.get('/usuarioLogro', middleware, usuarioLogroController.getUsuarioLogro);
router.put('/usuarioLogro', middleware, usuarioLogroController.updateUsuarioLogro);
router.post('/usuarioLogro', middleware, usuarioLogroController.insertUsuarioLogro);
router.delete('/usuarioLogro/:id', middleware, usuarioLogroController.deleteUsuarioLogro);

module.exports = router;