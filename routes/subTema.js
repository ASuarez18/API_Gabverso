const express = require('express');
const router = express.Router();
const subTemaController = require('../controller/subTema.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/subTema', middleware, subTemaController.getSubTemas);
router.get('/subTema/:id', middleware, subTemaController.getSubTema);
router.put('/subTema', middleware, subTemaController.updateSubTema);
router.post('/subTema', middleware, subTemaController.insertSubTema);
router.delete('/subTema/:id', middleware, subTemaController.deleteSubTema);

module.exports = router;