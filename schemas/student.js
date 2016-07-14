var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentSchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    name: {type: String, required: true},
    password:{type: String, required: true},
    gender:{type: String, required: true},
    lessonList:[String],
    progress: [{
    		lessonID:String,
    		activityID:Number,	
    		grade: { type:Number, min:0, max:100}												
    }]

}, {collection: 'students'});

//validation with DB
var Student = mongoose.model('Student', studentSchema);

module.exports = Student;
