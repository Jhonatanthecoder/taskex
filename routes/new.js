var express = require('express');
var router = express.Router();
const data = require('../public/javascripts/data.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new', {title: 'New'})
});

router.post('/', function(req, res, next) {
  //data.push({text: req.body.text, author: req.body.author})
  const objct = {text: String(req.body.texto), author: String(req.body.authors)}
  data.push(objct)
  console.log(data)
  res.redirect('/')
  //res.render('new', {title: 'New'})
})

module.exports = router;
