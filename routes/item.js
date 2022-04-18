const express = require('express');
const router = express.Router();
const itemController = require('../controller/item.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/item', middleware, itemController.getItems);
router.get('/item/:id', middleware, itemController.getItem);
router.put('/item', middleware, itemController.updateItem);
router.post('/item', middleware, itemController.insertItem);
router.delete('/item/:id', middleware, itemController.deleteItem);

module.exports = router;