const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	addUser(req, res){
		let user = new User(req.body);
		user.save((err) => {
			if(err){
				return res.status(401).json(err)
			}
			return res.json(user);
		});
	},
	getOneUser(req, res) {
		User.findOne({email: req.params.email}, (err, user) => {
			if(!user){
				return res.status(500).json('Invalid email or password');
			}
			return res.json(user);
		})
	}
}
