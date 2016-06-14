var mongoose = require('mongoose');
var schema = mongoose.Schema;
var lessonSchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    subject: {type: String},
    grade: {type: Number, min:0, max:100 },
    lessonTitle: {type: String,required: true},
    date: {type: Date},
    teacherID: {type: Number, unique: true, required: true}
}, {collection: 'lessons'});

//validation with DB
var Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;