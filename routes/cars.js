/*this page will handle routes for adding to cars DB. Proof of concept*/
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('cars', { title: 'Cars DB PoC' });
});

module.exports = router;