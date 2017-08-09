var user = require('../controllers/users.js')

module.exports = function(app){
    app.get('/', user.index);
    app.post('/signup', user.signup);
    app.post('/login', user.login);
    app.get('/welcome', user.welcome);
    app.get('/logout', user.logout);
}
