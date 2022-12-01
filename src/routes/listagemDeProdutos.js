var express = require('express');
var router = express.Router();

const listagemDeProdutoController = require('../controller/listagemDeProdutoController')

router.get('/', listagemDeProdutoController.showIndex);

module.exports = router;
