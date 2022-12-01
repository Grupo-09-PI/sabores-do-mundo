var express = require('express');
var router = express.Router();

const cadastroController = require('../controller/cadastroController')

/* GET home page. */
router.get('/', cadastroController.showIndex);


module.exports = router;
