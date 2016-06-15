var express = require('express');
var app = express();
app.use('/',express.static('index.html')).listen(8080);
 app.get('/', function (req, res) { 
     //res.status(200).json({message:"Teacher app is running!"});
     res.sendfile(' {__dirname}/index.html'); 
 });
console.log('listening.....');