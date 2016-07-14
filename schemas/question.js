var mongoose = require('mongoose');
var schema = mongoose.Schema;
var questionSchema = new schema({
    stName:{type: String, required: true},
    question: {type: String, required: true},
   	date: {type: Date},
   	answerIDList: [String]
}, {collection: 'questions'});

//validation with DB
var Question = mongoose.model('Question', questionSchema);

module.exports = Question;