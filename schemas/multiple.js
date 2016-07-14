var mongoose = require('mongoose');
var schema = mongoose.Schema;
var multipleSchema = new schema({
    type: {type: String, required: true},
    lessonID:{type: String, index: 1, unique: true, required: true},
    questions:String,
    answers:[{
    	answer:String,
    	correct:Boolean
    }]
}, {collection: 'multipleChoices'});

//validation with DB
var Multiple = mongoose.model('Multiple', multipleSchema);

module.exports = Multiple;
