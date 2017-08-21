const users = require('./../controllers/users.js');
path = require('path');
mongoose = require('mongoose');
module.exports = function (app) {

	app.post('/api/users', users.addUser);
	app.get('/api/users/:email', users.getOneUser)

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
