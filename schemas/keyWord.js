var mongoose = require('mongoose');
var schema = mongoose.Schema;
var keyWordSchema = new schema({
    id:{type: Number, index: 1, unique: true, required: true},
    title: {type: String, required: true},
    info:{type: String, required: true},
    lessonID:[{type: Number, unique: true, required: true}]
}, {collection: 'keyWords'});

//validation with DB
var KeyWord = mongoose.model('KeyWord', keyWordSchema);

module.exports = KeyWord;