const users = require('./../controllers/users.js');
const questions = require('./../controllers/questions.js');
const answers = require('./../controllers/answers.js');
const path = require('path');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.get('/api/users', users.loggedIn);
	// app.get('/api/logout', users.logout);
	app.post('/api/users', users.login);
	app.post('/api/questions', questions.question);
	app.get('/api/questions', questions.getquestions);
	app.get('/api/questions/:id', questions.getOneQuestion);
	app.post('/api/questions/:id/answers', answers.newAnswer);
	app.get('/api/questions/:id/answers', answers.getAnswers);
	app.post('/api/answers/:id', answers.like)
	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
