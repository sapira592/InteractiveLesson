var mongoose = require('mongoose');
var schema = mongoose.Schema;
var lessonSchema = new schema({
	id:{type: String, unique: true},
    subject: {type: String},
    grade: {type: Number, min:0, max:100 },
    lessonTitle: {type: String},
    date: {type: Date},
    presentationUrl:{type: String},
    teacherID:{type: Number},
}, {collection: 'lessons'});

//validation with DB
var Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;