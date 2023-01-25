var express = require('express');
var router = express.Router();

const painelUsuarioController = require('../controller/painelUsuarioController')

/* GET home page. */
router.get('/', painelUsuarioController.showIndex);

router.get('/admin', painelUsuarioController.showAdmin);

module.exports = router;
