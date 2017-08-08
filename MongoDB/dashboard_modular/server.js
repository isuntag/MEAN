var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 4444;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/client/views");

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})
