var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

function Cats() {
    this.index = function(req, res) {
        Cat.find({}, function(err,cats) {
            if(err){
                console.log(err);
            }
            res.render('index', {cats: cats});
        });
    }
    this.add = function(req, res) {
        res.render('add');
    }
    this.addCat = function(req, res) {
        var add_cat = new Cat(req.body);
        add_cat.save(function(err) {
            if(err) {
                console.log(add_cat.errors);
                res.render('add', {errors: add_cat.errors});
            }
            else{
                res.redirect('/');
            }
        });
    }
    this.edit = function(req, res) {
        Cat.find({_id: req.params.id}, function(err, cat) {
            if(err) {
                console.log(err);
            }
            res.render('edit', {cat: cat[0]});
        })
    }
    this.update = function(req, res) {
        Cat.update({_id: req.params.id}, req.body, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect('/');
        });
    }
    this.remove = function(req, res) {
        Cat.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log(err);
            }
            res.redirect('/');
        });
    }
}

module.exports = new Cats();
