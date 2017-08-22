const mongoose = require('mongoose');
const Question = mongoose.model('Question');

module.exports = {
	question: function (req, res) {
		let error = [];
		let newquestion = new Question(req.body);
		newquestion.save(function(err){
			if(err){
				console.warn(err);
				error.push(err);
				return res.status(400).json({errors:errors});
			}
			else {
				return res.json(newquestion);
			}
		})
	},
	getquestions: function(req, res) {
		let errors = [];
		Question.find({}, function(err, questions) {
			if(err){
				errors.push("No questions.");
				return res.status(400).json({errors: errors})
			}
			else{
				return res.json(questions)
			}
		})
	},
	getOneQuestion: function(req, res) {
		let errors = [];
		Question.findOne({'_id':req.params.id}, function(err,question) {
			if(err){
				errors.push("Question does not exist.");
				return res.status(400).json({errors: errors})
			}
			else{
				return res.json(question)
			}
		})
	}
}
