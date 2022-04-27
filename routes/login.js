const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/search',loginController.searchUser);
router.post('/login', loginController.insertLogin);
router.post('/register', loginController.insertUsuario);

module.exports = router;