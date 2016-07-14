var mongoose = require('mongoose');
var schema = mongoose.Schema;
var keyWordSchema = new schema({
    title: {type: String},
    info:{type: String},
    lessonID:[{type: String}],
}, {collection: 'keyWords'});

//validation with DB
var KeyWord = mongoose.model('KeyWord', keyWordSchema);

module.exports = KeyWord;