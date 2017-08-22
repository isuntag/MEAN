'use strict'
//Import Dependencies
//Initialize express
const express = require('express');
const session = require('express-session')
const app = express()
//DB stuff
require('./server/utils/mongoose');

//Start customized middleware
require('./server/utils/middleware')(app)

// Route and route logic
require('./server/utils/routes')(app)

app.use(session({secret: 'codingdojorocks'})); 
app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})
