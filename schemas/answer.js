var mongoose = require('mongoose');
var schema = mongoose.Schema;
var answerSchema = new schema({
    answer: {type: String, required: true},
   	date: {type: Date},
   	questionID: {type: String}
}, {collection: 'answers'});

//validation with DB
var Answer = mongoose.model('Answar', answerSchema);

module.exports = Answer;
