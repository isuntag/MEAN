var mongoose = require('mongoose');
var User = mongoose.model('User');

function Users() {
    this.index = function(req, res){
        res.render('index', {errors: ''})
    }
    this.signup = function(req, res){
        let user = new User(req.body);
        user.save(function(err){
            if(err){
                console.log(err);
                res.render('index', {errors: err});
            }
            console.log('user created');
            req.session.user_id = user.id;
            req.session.name = user.first_name+ " "+user.last_name;
            res.redirect('/welcome');
        });
    }
    this.login = function(req, res){
        User.findOne({email: req.body.email}, function(err, result) {
            if(err){
                console.log(err);
                res.render('index', {errors: err});
            }
            console.log('login successful');
            req.session.user_id = result.id;
            req.session.name = result.first_name+ " "+result.last_name;
            res.redirect('/welcome');
        });
    }
    this.welcome = function(req, res){
        if(!req.session.user_id) {
            res.redirect('/');
        }
        else{
            res.render('welcome', {id: req.session.user_id, name: req.session.name});
        }
    }
    this.logout = function(req, res) {
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = new Users();
