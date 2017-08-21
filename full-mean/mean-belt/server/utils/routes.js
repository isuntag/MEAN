const path = require('path');
const users = require('./../controllers/users.js');

module.exports = function (app) {
	// app.get('/api/users', users.index);
	app.post('/api/users', users.addUser);

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
