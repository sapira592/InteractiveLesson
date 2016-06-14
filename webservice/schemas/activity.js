var mongoose = require('mongoose');
var schema = mongoose.Schema;
var activitySchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    type: {type: Number, required: true},
    lessonID:{type: Number, index: 1, unique: true, required: true},
    questions:String,
    answers:[String]
}, {collection: 'activities'});

//validation with DB
var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
