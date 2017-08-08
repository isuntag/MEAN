var name = require('../controllers/names');

module.exports = function(app) {
    app.get('/', name.index),
    app.get('/new/:name', name.newName),
    app.get('/remove/:name', name.remove),
    app.get('/:name', name.name)
}
