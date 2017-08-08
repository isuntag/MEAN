var cats = require('../controllers/cats.js');

module.exports = function(app) {
    app.get('/', cats.index);
    app.get('/cats/add', cats.add);
    app.post('/cats', cats.addCat);
    app.get('/cats/:id', cats.edit);
    app.post('/cats/:id', cats.update);
    app.get('/cats/destroy/:id', cats.remove);
}
