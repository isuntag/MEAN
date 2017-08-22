const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt')

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
				newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
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
				errors.push("Invalid email or password.");
				return res.status(400).json({errors:errors})
			}
			else{
				if(!bcrypt.compareSync(req.body.password, user.password)){
					errors.push("Invalid email or password.");
					return res.status(401).json({errors: errors})
				}
				else{
					return res.json(user);
				}
			}
		})
	}
}
