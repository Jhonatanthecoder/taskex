var express = require('express');
var router = express.Router();
const data = require('../public/javascripts/data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  const toArray = Object.values(data)
  res.render('index', { title: 'Express', bringData: data });
});

module.exports = router;
