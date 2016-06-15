var mongoose = require('mongoose');
var lesson = require('../schemas/lesson');

exports.createLesson =function(req, res){
    console.log(req.body);
    var lessonObject = {
        subject: req.body.subject,
        grade: req.body.grade,
        lessonTitle: req.body.lessonTitle,
        date: req.body.date
    }
    lesson.create(lessonObject, function(err,data){
        if(err){
            res.json({success:false, message:err});
            return;
        }
        res.json({success:true, message:data});
    });

}

// var lessonSchema = new schema({
//     id:{type: Number, index: 1, unique: true, required: true},
//     subject: {type: String},
//     grade: {type: Number, min:0, max:100 },
//     lessonTitle: {type: String,required: true},
//     date: {type: Date},
// }, {collection: 'lessons'});