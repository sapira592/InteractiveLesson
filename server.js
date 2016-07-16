var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var guid = require('guid');
var multer = require ('multer');
var upload = multer({ storage: multer.diskStorage({
    destination: "./uploads",
    filename: function(req,file,cb){
        var dotIndex = file.originalname.lastIndexOf(".");
        var ext = file.originalname.substring(dotIndex,file.originalname.length);
        cb(null,guid.raw() + ext);
    }
}) });
var expressSession = require('express-session');
var mongoose = require('mongoose');
var db = require('./mongoConnection');
var cors = require('cors');
var app = express();
	app.use(cors());//
var port = process.env.PORT || 3000;
var currentLesson;

app.use("/images",express.static("./uploads"));
app.set('port', port);
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.set("Content-Type", "Application/json");
	next();
});
app.use(bodyParser.json());//enable to return jsons
app.use(bodyParser.urlencoded({extended:false}));
/*app.use(cookieParser());
app.use(expressSession({secret: 'max', resave: false,
						saveUninitialized: true,cookie: { secure: true }}));*/

//only save the session if we change it.
//app.use(express.session({secret: '1234567890QWERTY'}));

//=================== Controllers =======================
var teacherAction = require('./controllers/teacherController.js');
var studentAction = require('./controllers/studentController.js');
var lessonAction = require('./controllers/lessonController.js');
var keyWordAction = require('./controllers/keyWordController.js');
var MultipleCoiceAction = require('./controllers/multipleController.js');
var QuestionAction = require('./controllers/questionController.js');
var AnswerAction = require('./controllers/answerController.js');

//===================== Lesson =========================
 app.get('/getAllLessons' , lessonAction.getAllLessonsPerTeacher);//ok
 app.post('/createLesson' , lessonAction.createLesson);//ok
 app.post('/updateLesson' ,upload.single("image"), lessonAction.updateLesson);
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
 app.post('/removeMultipleChoice' , MultipleCoiceAction.removeMultipleChoice);//ok

//==================== Answers =======================
app.post('/getAllAnswers' , AnswerAction.getAllAnswers);//ok
app.post('/addAnswer' , AnswerAction.addAnswer);//ok

//==================== Questions =====================
app.get('/getAllQuestions' , QuestionAction.getAllQuestions);//ok
app.post('/addQuestion' , QuestionAction.addQuestion);//ok

//======================= General ==========================
 app.get('/', function (req, res) { 
     res.status(200).json({message:"InteractiveLesson App is running!"}); 
 }); // ------------> connect to login html
app.listen(port);
console.log("service is listening on port " + port);


