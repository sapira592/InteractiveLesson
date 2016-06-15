var mongoose = require('mongoose');
var schema = mongoose.Schema;
var lessonSchema = new schema({
    subject: {type: String},
    grade: {type: Number, min:0, max:100 },
    lessonTitle: {type: String,required: true},
    date: {type: Date},
}, {collection: 'lessons - new'});

//validation with DB
var Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;