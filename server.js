var express = require('express'),
	app     = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/about', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/portfolio', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/murals', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/live-paintings', function(req, res) {
	res.sendfile('./public/index.html');
});

app.get('/contact', function(req, res) {
	res.sendfile('./public/index.html');
});

app.listen(80);
console.log("App listening on port 80");