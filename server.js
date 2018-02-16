var express = require("express");
var app = express();
var server = require("http").Server(app);

app.get('/', function(req, res) {

	res.send('Hello world!');

});

app.listen(3000, function() {
	console.log('Server up and running, listening on port : 3000');
});



