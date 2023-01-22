var express = require('express');
var router = express.Router();

const IndexController = require('../controller/indexController')

/* GET home page. */
router.get('/', IndexController.showIndex );

router.get('/index', IndexController.showIndextwo );


module.exports = router;
