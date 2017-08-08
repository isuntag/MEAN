var mongoose = require('mongoose');
var Name = mongoose.model('Name');

function Names(){
    this.index = function(req, res) {
        Name.find({}, function(err, results){
            res.json(results);
        });
    }
    this.newName = function(req, res) {
        var newName = req.params.name;
        Name.create({name: newName}, function(err) {
            if(err) {
                console.log(newName.errors);
            }
            res.redirect('/');
        });
    }
    this.remove = function(req, res) {
        Name.remove({name: req.params.name}, function(err) {
            if(err) {
                console.log(err);
            }
            res.redirect('/');
        });
    }
    this.name = function(req, res) {
        Name.findOne({name: req.params.name}, function(err, results){
            if(err) {
                console.log(newName.errors);
            }
            res.json(results);
        });
    }
}
module.exports = new Names();
