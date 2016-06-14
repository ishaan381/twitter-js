var express = require('express');
const chalk = require('chalk');
const swig = require('swig');
var app = express();

var locals = {
  title: 'An Example',
  people: [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]
};




app.use(function(req, res, next) {
  var str = req.method + ' ' + req.path + '\n';
  process.stdout.write(chalk.red(str));
  next();
})

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

app.get('/', function(req,res) {
  res.render('index', locals)
});

app.use('/special/', function (req, res, next) {
  res.send("You've reached the special area");
});

/*app.get('/', function(req, res) {
  res.send("server is listening")
});*/


app.get('/news', function(req, res) {
  res.status(404).send("Page does not exist")
});

app.listen(3000, function() {
  console.log("listener");
});


swig.setDefaults({cache: false});




/*swig.renderFile(__dirname + '/views/index.html', locals, function(err, output) {
  console.log(output);
});*/