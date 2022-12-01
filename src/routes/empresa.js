var express = require('express');
var router = express.Router();

const empresaController = require('../controller/empresaController')

/* GET home page. */
router.get('/', empresaController.showIndex );

module.exports = router;
