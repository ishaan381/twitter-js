var express = require('express');
var app = express();



app.get('/', function(req, res) {
  res.send("server is listening")
});

app.listen(3000, function() {
  console.log("listener");
});