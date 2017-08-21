const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	addUser:function(req,res){
		let errors = [];
		User.find({email:req.body.email}, function(err,user){
			if(user.length > 0){
				errors.push("Email already exists.");
				return res.json(err, errors)
			}
			else{
				let newUser = new User(req.body);
				newUser.save(function(err){
					if(err){
						errors.push(err);
						return res.json(err, errors);
					}
					else {
						return res.json(newUser);
					}
				})
			}

		})
	}
}
