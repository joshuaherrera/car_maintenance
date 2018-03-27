/*Render individual js files for routes, can define subroutes
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
