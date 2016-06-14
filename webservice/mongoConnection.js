var mongoose = require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds013584.mlab.com:13584/interactive_lesson');


/******* imports all Schemas Moduls *******/
var Activity = require('./schemas/activity.js');
var Answer = require('./schemas/answer.js');
var KeyWord = require('./schemas/keyWord.js');
var Lesson = require('./schemas/lesson.js');
var Question = require('./schemas/question.js');
var Answer = require('./schemas/answer.js');
var Teacher = require('./schemas/teacher.js');
/********************************* *******/

var conn = mongoose.connection;

conn.on('error', function(err){
	console.log("Mongoose: Error: " + err);
});

conn.once('open', function(){
	console.log("connected");
	mongoose.disconnect();
});

/*conn.on('disconnected', function() {
	console.log('Mongoose: Connection stopped, recconect');
	mongoose.connect(config.mongoUrl, options);
});


conn.on('reconnected', function () {
	console.info('Mongoose reconnected!');
});*/


/*conn.once('open',function() {
 Teacher.find({},function(err,data) {
    if(err) throw err;
    console.log("Cannot access datas");
    mongoose.disconnect();
  });
});*/




