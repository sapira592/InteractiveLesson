var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/', express.static('./public'));
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.set("Content-Type", "Application/json");
	next();
});

 app.get('/', function (req, res) { 
     res.status(200).json({message:"InteractiveLesson App is running!"}); 
 }); 


app.listen(port);
console.log("service is listening on port " + port);