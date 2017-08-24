const users = require('./../controllers/users.js');
const contents = require('./../controllers/contents.js');
const path = require('path');

module.exports = function (app) {

	app.post('/api/user/login', users.login);
	app.get('/api/user/check', users.check);
	app.get('/api/user/logout', users.logout);
	app.post('/api/contents', contents.add);
	app.get('/api/contents', contents.getAll);
	app.get('/api/contents/:id', contents.getOne);
	app.delete('/api/contents/:id', contents.delete);
	app.post('/api/:id/addsub', contents.addsub);
	app.put('/api/:subid', contents.upcount);
	app.delete('/api/:subid', contents.deletesub);
	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
