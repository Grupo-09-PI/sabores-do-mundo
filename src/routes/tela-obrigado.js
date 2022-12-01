var express = require('express');
var router = express.Router();

const telaObrigadoController = require('../controller/telaObrigadoController')

/* GET home page. */
router.get('/', telaObrigadoController.showIndex);

module.exports = router;
