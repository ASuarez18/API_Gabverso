const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoria.controller');

const middleware = require('../middleware/jwt-middleware.js');
router.get('/categoria', middleware, categoriaController.getCategorias);
router.get('/categoria/:id', middleware, categoriaController.getCategoria);
router.put('/categoria', middleware, categoriaController.updateCategoria);
router.post('/categoria', middleware, categoriaController.insertCategoria);
router.delete('/categoria/:id', middleware, categoriaController.deleteCategoria);

module.exports = router;