var express = require('express');
var router = express.Router();

const produtoController = require('../controller/produtoController')

/* GET home page. */
router.get('/', produtoController.showIndex);
;

module.exports = router;
