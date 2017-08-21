const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	addUser:function(req,res){
		let errors = [];
		User.find({email:req.body.email}, function(err,user){
			if(user.length > 0){
				errors.push("Email already exists.");
				return res.status(400).json({errors: errors})
			}
			else{
				let newUser = new User(req.body);
				newUser.save(function(err){
					if(err){
						console.warn(err);
						errors.push(err);
						return res.status(400).json({errors: errors});
					}
					else {
						return res.json(newUser);
					}
				})
			}

		})
	},
	login:function(req,res){
		let errors = [];
		User.findOne({email:req.body.email}, function(err, user) {
			if(err){
				errors.push("Invalid email.");
				console.log('errors')
				return res.status(400).json({errors:errors})
			}
			else{
				if(user.password != req.body.password){
					errors.push("Invalid password.");
					return res.status(401).json({errors: errors})
				}
				else{
				console.log('success')
					return res.json(user);
				}
			}
		})
	}
}
