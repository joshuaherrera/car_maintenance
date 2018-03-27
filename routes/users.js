var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users'});
});

router.get('/cool', function(req, res, next) {
  res.send('you\'re cool');
});

module.exports = router;
