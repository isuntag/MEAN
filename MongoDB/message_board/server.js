var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 6789;
var mongoose = require('mongoose');
var path = require("path");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

mongoose.Promise = global.Promise;

app.get('/', function(req, res) {
    Post.find({}).populate('_comments').exec(function(err, post) {
        if(err) {
            console.log(err);
        }
        res.render('index', {posts: post})
    });
});

app.post('/post', function(req,res) {
    var add_post = new Post(req.body);
    add_post.save(function(err) {
        if(err) {
            console.log(add_post.errors);
        }
        res.redirect('/');
    });
});

app.post('/posts/:id', function(req, res) {
    Post.findOne({_id: req.params.id}, function(err, post) {
        var comment = new Comment(req.body);
        comment._post = post._id;
        console.log(post._id);
        Post.update({_id: req.params.id}, {$push: {"_comments": comment}}, function(err) {
        });
        comment.save(function(err){
            if(err){
                console.log('Error');
                res.render('index.ejs', {errors: newComment.errors});
            }
            else{
                console.log("comment added");
                res.redirect('/');
            }
        });
    });
});

app.get('/delete', function(req, res) {
    Post.remove({}, function(err){

    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

mongoose.connect('mongodb://localhost/message_board', function(err, db){
	if(err){
		console.log("error here");
		console.log(err);
	}
});

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true});
mongoose.model("Post", PostSchema);
var Post = mongoose.model("Post");
//
var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref:'Post'},
}, {timestamps: true});
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model('Comment');
