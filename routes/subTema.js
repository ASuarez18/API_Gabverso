const express = require('express');
const router = express.Router();
const subTemaController = require('../controller/subTema.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/subTema', subTemaController.getSubTemas);
router.get('/subTema/:id', subTemaController.getSubTema);
router.put('/subTema', subTemaController.updateSubTema);
router.post('/subTema', subTemaController.insertSubTema);
router.delete('/subTema/:id', subTemaController.deleteSubTema);

module.exports = router;