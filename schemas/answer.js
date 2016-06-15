var mongoose = require('mongoose');
var schema = mongoose.Schema;
var answerSchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    answer: {type: String, required: true},
   	time: String,
   	questionIDList: [Number]
}, {collection: 'answers'});

//validation with DB
var Answer = mongoose.model('Answar', answerSchema);

module.exports = Answer;
