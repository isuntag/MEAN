var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5500;
var mongoose = require('mongoose');
var moment = require('moment');

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 1, maxlength: 100},
  quote: {type: String, required: true, minlength: 1}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/quotes', function(req,res) {
    var newquote = new Quote(req.body);
    newquote.save(function(err) {
        if(err) {
            console.log(newquote.errors);
            res.render('index', {errors: newquote.errors});
        }
        else {
            console.log("quote added");
            res.redirect('/quotes');
        }
    });
});

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if(err) {
            res.render('quote', {errors: Quote.errors, moment: moment});
        }
        else {
            var allquotes = [];
            for(i=0; i<quotes.length; i++) {
                allquotes.push(quotes[i]);
            }
            console.log(allquotes);
            res.render('quotes', {quotes: allquotes, moment: moment});
        }
    });
});

app.listen(port, function(){
  console.log(`Listening to port ${port}`);
});
