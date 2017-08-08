var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 4000;
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dashboard');
// Creates the schema for cats in the database
var CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    age: {type: Number, required: true},
    color: {type: String, required: true}
}, {timestamps: true});
mongoose.model('cat', CatSchema);
var cat = mongoose.model('cat');

// Find all the cats in the database and render the index with their information
app.get('/', function(req, res) {
    cat.find({}, function(err,cats) {
        if(err){
            console.log(err);
        }
        res.render('index', {cats: cats});
    });
});

// Clicking the "Add a Cat" button will redirect to the add a cat form
app.get('/cats/add', function(req, res) {
    res.render('add');
});

// Submitted form from /cats/add is routed here and adds a new cat the the database
app.post('/cats', function(req, res) {
    var add_cat = new cat(req.body);
    add_cat.save(function(err) {
        if(err) {
            console.log(add_cat.errors);
            res.render('add', {errors: add_cat.errors});
        }
        else{
            res.redirect('/');
        }
    });
});

// Clicking the "Edit" button will get the information of that specific cat and render it in /cats/:id
app.get('/cats/:id', function(req, res) {
    cat.find({_id: req.params.id}, function(err, cat) {
        if(err) {
            console.log(err);
        }
        res.render('edit', {cat: cat[0]});
    })
});

// Submitted form data from the edit page will update the information in the databased based on the id of the cat and redirect back to the index
app.post('/cats/:id', function(req, res) {
    cat.update({_id: req.params.id}, req.body, function(err, result){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

// Clicking the "Delete" button will remove the cat from the database based on the cat's id and redirect back to index
app.get('/cats/destroy/:id', function(req, res) {
    cat.remove({_id: req.params.id}, function(err){
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})
