var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', null);
});

router.get('/carousel', function(req, res, next) {
  
});

module.exports = router;
