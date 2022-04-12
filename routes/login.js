const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller');

// const middleware = '../middleware/jwt-middleware.js';

router.post('/login', loginController.insertLogin);

module.exports = router;