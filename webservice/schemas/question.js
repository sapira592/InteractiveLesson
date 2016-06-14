var mongoose = require('mongoose');
var schema = mongoose.Schema;
var questionSchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    question: {type: String, required: true},
   	time: String,
   	answerIDList: [Number]
}, {collection: 'questions'});

//validation with DB
var Question = mongoose.model('Question', questionSchema);

module.exports = Question;