var express = require('express');
var router = express.Router();

const carrinhoController = require('../controller/carrinhoController')

/* GET home page. */
router.get('/', carrinhoController.showIndex );


module.exports = router;
