var express = require('express');
var path = require('path');
var app = express();
var port = 1235;

app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});
