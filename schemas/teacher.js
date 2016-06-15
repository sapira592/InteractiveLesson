var mongoose = require('mongoose');
var schema = mongoose.Schema;
var teacherSchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    name: {type: String, required: true},
    password:{type: String, required: true},
    lessonList:[Number]
}, {collection: 'teachers'});

//validation with DB
var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;