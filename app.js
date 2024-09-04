var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h2 style="text-align: center;">Hello World</h2>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000 (http://127.0.0.1:3000/)!');
});