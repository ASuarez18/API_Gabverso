const express = require('express');
const router = express.Router();
const usuarioItemController = require('../controller/usuarioItem.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/usuarioItems', middleware, usuarioItemController.getUsuarioItems);
router.get('/usuarioItemU/:id', middleware, usuarioItemController.getUsuarioItemU);
router.get('/usuarioItemI/:id', middleware, usuarioItemController.getUsuarioItemI);
router.get('/usuarioItem', middleware, usuarioItemController.getUsuarioItem);
router.put('/usuarioItem', middleware, usuarioItemController.updateUsuarioItem);
router.post('/usuarioItem', middleware, usuarioItemController.insertUsuarioItem);
router.delete('/usuarioItem/:id', middleware, usuarioItemController.deleteUsuarioItem);

module.exports = router;