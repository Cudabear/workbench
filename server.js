var express = require('express');
var app = express();

app.use(express.static('projects'));

app.listen(3000, function(){
	console.log('App is alive on port 3000!');
});