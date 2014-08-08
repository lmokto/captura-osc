var osc = require('../lib/osc.js'),
	util = require('util'),
	http = require('http'),
	fs = require('fs'),
	index = fs.readFileSync(__dirname + "/index.html");

var app = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

var io = require('socket.io').listen(app);


// oscServer.on("message", function (msg, rinfo){
// 	//console.log(rinfo);
//     console.log(msg);
//     io.socket.send(msg);
//     //io.socket.send(msg);
// });

io.sockets.on('connection', function (socket) {
	var oscServer = new osc.Server(3000, '127.0.0.1');
	oscServer.on("message", function (msg, rinfo){
		//console.log(rinfo);
	    console.log(msg);
	    socket.emit("msg", msg);
	    //io.socket.send(msg);
	});

});


app.listen(3000);