var express = require('express');
var app = express();
var port = 8800;

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index');
});

var server = app.listen(port, function(){
  console.log(`Now listening on port ${port}`);
});
var io = require('socket.io').listen(server);
// set a variable of count = 0 outside of the connection so it doesn't get recreated each time a connection is made
var count = 0;
io.sockets.on('connection', function(socket) {
  console.log('Client/socket is connected!');
  console.log('Client/socket id is: ', socket.id);
  // when a new connection is made emit to the individual connection the current current count
  socket.emit('newuser', {count});
  // the server listens for button_clicked and increases count by 1 when it hears the event. It then emits to all connections the updated count
  socket.on('button_clicked', function() {
    count += 1;
    io.sockets.emit('count_add', {count});
  });
  // the server listens for rest and sets the count to 0 when it hears the event. It then emits to all connections the updated count
  socket.on('reset', function() {
    count = 0;
    io.sockets.emit('reset_count', {count});
  });
});
