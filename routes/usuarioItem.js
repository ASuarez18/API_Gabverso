const express = require('express');
const router = express.Router();
const usuarioItemController = require('../controller/usuarioItem.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/usuarioItems', usuarioItemController.getUsuarioItems);
router.get('/usuarioItemU/:id', usuarioItemController.getUsuarioItemU);
router.get('/usuarioItemI/:id', usuarioItemController.getUsuarioItemI);
router.get('/usuarioItem', usuarioItemController.getUsuarioItem);
router.put('/usuarioItem', usuarioItemController.updateUsuarioItem);
router.post('/usuarioItem', usuarioItemController.insertUsuarioItem);
router.delete('/usuarioItem/:id', usuarioItemController.deleteUsuarioItem);

module.exports = router;