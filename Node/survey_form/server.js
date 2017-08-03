var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var port = 5000;
var app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.render('index', {'title': 'Survey Form'});
});

app.post('/result', function(req, res) {
  res.render('result', {'name': req.body.name, 'location': req.body.location, 'lang': req.body.lang, 'comment': req.body.comment});
});

app.listen(port, function(){
  console.log(`Now listening on port ${port}.`)
});
