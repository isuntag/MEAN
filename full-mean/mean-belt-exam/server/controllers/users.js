const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	loggedin: function (req, res) {
		if(req.session.user){
			res.json(req.session.user);
		}
		else{
			console.log("Not logged in.")
		}
	},
	// logout: function(req, res) {
	// 	req.session = null;
	// 	return res.json()
	// },
	login: function (req, res) {
		let error = [];
		User.findOne({name:req.body.name}, function(err,user){
			if(user != null) {
				req.session = {};
				req.session.user = user;
				return res.json(user);
			}
			else{
				let newUser = new User(req.body);
				newUser.save(function(err){
					if(err){
						console.warn(err);
						error.push(err);
						return res.status(400).json({errors:errors});
					}
					else {
						req.session = {};
						req.session.user = newUser;
						return res.json(newUser);
					}
				})
			}
		})
	}
}
