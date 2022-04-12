const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoria.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/categoria', categoriaController.getCategorias);
router.get('/categoria/:id', categoriaController.getCategoria);
router.put('/categoria', categoriaController.updateCategoria);
router.post('/categoria', categoriaController.insertCategoria);
router.delete('/categoria/:id', categoriaController.deleteCategoria);

module.exports = router;