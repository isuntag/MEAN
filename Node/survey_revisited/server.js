var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(port, function(){
  console.log(`Listening on port ${port}...`);
});
var io = require('socket.io').listen(server);

app.get('/', function(req, res) {
  res.render('index');
});

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  socket.on( "form_submitted", function (data){
    console.log('Someone submitted a form!');
    socket.emit( 'server_response', {response: data});
    let num = Math.floor(Math.random()*1000+1);
    socket.emit('random_number', {response: num});
  });
})
