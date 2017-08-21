const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	addUser:function(req,res){
		let errors = [];
		User.find({email:req.body.email}, function(err,user){
			if(user.length > 0){
				errors.push("Email already exists.");
				console.log(`errors ${errors}`)
				return res.status(400).json({errors: errors})
			}
			else{
				let newUser = new User(req.body);
				newUser.save(function(err){
					if(err){
						errors.push(err);
						console.log(`errors ${errors}`)
						return res.status(400).json({errors: errors});
					}
					else {
						console.log(`created ${newUser}`)
						return res.json(newUser);
					}
				})
			}

		})
	}
}
