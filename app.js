var express = require('express');
const chalk = require('chalk');

var app = express();



app.use(function(req, res, next) {
  var str = req.method + ' ' + req.path + '\n';
  process.stdout.write(chalk.red(str));
  next();
})

app.use('/special/', function (req, res, next) {
  res.send("You've reached the special area");
});

app.get('/', function(req, res) {
  res.send("server is listening")
});

app.get('/news', function(req, res) {
  res.status(404).send("Page does not exist")
});

app.listen(3000, function() {
  console.log("listener");
});