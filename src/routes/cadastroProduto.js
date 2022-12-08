var express = require('express');
var router = express.Router();

const cadastroProdutoController = require('../controller/cadastroProdutoController')

/* GET home page. */
router.get('/', cadastroProdutoController.showIndex);

module.exports = router;
