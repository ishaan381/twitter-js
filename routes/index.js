var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.use(express.static('public'));
/*router.get('/stylesheets/style.css', function(req, res) {
  var cwd = process.cwd();
 res.sendFile(cwd + '/public/stylesheets/style.css', function(err) {
    if (err) throw err;
    console.log("sent")

  })*/ 
  
//});

module.exports = router;