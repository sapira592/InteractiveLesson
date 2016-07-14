var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./mongoConnection');
var cors = require('cors');
var app = express();
	app.use(cors());//
var port = process.env.PORT || 3000;
var currentLesson;

app.set('port', port);
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.set("Content-Type", "Application/json");
	next();
});
app.use(bodyParser.json());//enable to return jsons
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.cookieParser());
//app.use(express.session({secret: '1234567890QWERTY'}));

//=================== Controllers =======================
var teacherAction = require('./controllers/teacherController.js');
var studentAction = require('./controllers/studentController.js');
var lessonAction = require('./controllers/lessonController.js');
var keyWordAction = require('./controllers/keyWordController.js');
<<<<<<< HEAD
var MultipleCoiceAction = require('./controllers/multipleController.js');
var QuestionAction = require('./controllers/questionController.js');
=======
>>>>>>> origin/master


<<<<<<< HEAD
//===================== Lesson =========================
 app.get('/getAllLessons' , lessonAction.getAllLessons);//ok
 app.post('/createLesson' , lessonAction.createLesson);//ok
 app.post('/updateLesson' , lessonAction.updateLesson);

//===================== Teacher ========================
 app.post('/teacherLogin', teacherAction.login);//ok

//===================== Student ========================
 app.post('/studentLogin', studentAction.login);//ok
 app.post('/getProgress', studentAction.getStudentsProgressByLesson);//ok

//==================== KeyWords =======================
 app.get('/getAllKeyWords' , keyWordAction.getAllKeyWordOfLesson);//ok
 app.post('/createKeyWord' , keyWordAction.createKeyWord);//ok

//================= Multiple Choice ==================
 app.get('/getAllMultipleChoice' , MultipleCoiceAction.getAllMultipleChoices);//ok
 app.post('/createMultipleChoice' , MultipleCoiceAction.createMultipleChoice);//ok

//==================== Answers =======================

//==================== Questions =====================
app.get('/getAllQuestions' , QuestionAction.getAllQuestions);//ok
app.post('/addQuestion' , QuestionAction.addQuestion);//ok

//======================= General ==========================
=======
 app.get('/teacherLogin/:name/:pass', teacherAction.login);
 app.post('/createLesson' , lessonAction.createLesson);
 app.post('/createKeyWord' , keyWordAction.createKeyWord);
>>>>>>> origin/master
 app.get('/', function (req, res) { 
     res.status(200).json({message:"InteractiveLesson App is running!"}); 
 }); // ------------> connect to login html

app.listen(port);
console.log("service is listening on port " + port);