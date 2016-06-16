var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./mongoConnection');
var cors = require('cors');
var app = express();
app.use(cors());
var port = process.env.PORT || 3000;

app.set('port', port);
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.set("Content-Type", "Application/json");
	next();
});
app.use(bodyParser.urlencoded({extended:false}));

//=================== Controllers =======================
// var tc = require('./controllers/teacherController.js');
// var teacherAction = new tc(db.con);
var teacherAction = require('./controllers/teacherController.js');
var lessonAction = require('./controllers/lessonController.js');
var keyWordAction = require('./controllers/keyWordController.js');
var MultipleCoiceAction = require('./controllers/multipleController.js');

//=======================================================

 app.get('/teacherLogin/:name/:pass', teacherAction.login);
 app.post('/createLesson' , lessonAction.createLesson);
 app.post('/createKeyWord' , keyWordAction.createKeyWord);
  app.post('/createMultipleChoice' , MultipleCoiceAction.createMultipleChoice);
 app.get('/', function (req, res) { 
     res.status(200).json({message:"InteractiveLesson App is running!"}); 
 }); // ------------> connect to login html

app.listen(port);
console.log("service is listening on port " + port);