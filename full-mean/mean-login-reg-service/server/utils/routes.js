const users = require('./../controllers/users.js');
const path = require('path');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.post('/api/user/login', users.login);
	app.get('/api/user/check', users.check);
	app.get('/api/user/logout', users.logout);
	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
