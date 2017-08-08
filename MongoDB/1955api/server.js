var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = 1955;

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
