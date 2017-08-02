var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(session({secret: 'code'}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  if (req.session.count == null) {
    req.session.count = 0;
    console.log(req.session.count);
  }
  else {
    req.session.count += 1;
    console.log(req.session.count);
  }
  res.render('index', {title: "Counter", count: req.session.count});
});

app.get('/two', function(req, res) {
  req.session.count += 1;
  res.redirect('/');
})

app.get('/reset', function(req,res) {
  req.session.count = -1;
  res.redirect('/');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
