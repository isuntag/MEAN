const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');

module.exports = {
	newAnswer: function (req, res) {
		let error = [];
		let newanswer = new Answer(req.body);
		newanswer.save(function(err){
			if(err){
				console.warn(err);
				error.push(err);
				return res.status(400).json({errors:errors});
			}
			else {
				console.log(newanswer);
				return res.json(newanswer);
			}
		})
	},
	getAnswers: function(req, res) {
		let errors = [];
		Answer.find({}, function(err, answers) {
			if(err){
				errors.push("No questions.");
				return res.status(400).json({errors: errors})
			}
			else{
				return res.json(answers)
			}
		})
	},
	getOneAnswer: function(req, res) {
		let errors = [];
		Answer.findOne({'_id':req.params.id}, function(err,answer) {
			if(err){
				errors.push("Answer does not exist.");
				return res.status(400).json({errors: errors})
			}
			else{
				return res.json(answer)
			}
		})
	},
	like: function(req, res) {
		let errors = [];
		Answer.findOneAndUpdate({'_id':req.params.id}, { $inc: { "likes" : 1 }}, function(err) {
			if(err){
				errors.push("Answer does not exist.");
				return res.status(400).json({errors: errors})
			}
			else{
				return res.json('success')
			}
		})
	}
}
