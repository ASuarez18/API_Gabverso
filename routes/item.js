const express = require('express');
const router = express.Router();
const itemController = require('../controller/item.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/item', itemController.getItems);
router.get('/item/:id', itemController.getItem);
router.put('/item', itemController.updateItem);
router.post('/item', itemController.insertItem);
router.delete('/item/:id', itemController.deleteItem);

module.exports = router;