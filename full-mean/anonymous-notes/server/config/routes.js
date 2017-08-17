var note = require('../controllers/notes.js');
var path = require('path');

module.exports = function(app){
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}
