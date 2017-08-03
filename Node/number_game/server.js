var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var port = 9000;

app.use(session({secret: 'code'}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  if(!req.session.num) {
    req.session.num = Math.floor(Math.random()*100+1);
    console.log(`The number is: ${req.session.num}`);
  }
  if(!req.session.guess) {
    req.session.guess = '';
  }
  res.render('index', {'guess': req.session.guess, 'num': req.session.num, 'guessnum': req.session.guessnum});
});

app.post('/guess', function(req, res) {
  if(req.body.submit == 'Guess') {
    if(req.body.guess == req.session.num) {
      req.session.guess = 'correct'
    }
    else if(req.body.guess < req.session.num) {
      req.session.guess = 'low';
      req.session.guessnum = req.body.guess;
    }
    else if(req.body.guess > req.session.num) {
      req.session.guess = 'high';
      req.session.guessnum = req.body.guess;
    }
    else{
      req.session.guess = '';
    }
  }
  else if(req.body.submit == 'Reset'){
    req.session.destroy();
  }
  res.redirect('/');
});

app.listen(port, function(){
  console.log(`Listening to port ${port}`);
});
