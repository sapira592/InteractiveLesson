var mongoose = require('mongoose');
var Lesson = require('../schemas/lesson'); // the model

exports.createLesson =function(req, res){
    console.log(req.body);
    var lessonObject = {
        id:req.body.id,
        subject: req.body.subject,
        grade: req.body.grade,
        lessonTitle: req.body.lessonTitle,
        date: req.body.date,
        presentationUrl:null
    }
    Lesson.create(lessonObject, function(err,data){
        if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }
        res.json({success:true, message:data});
            return;
    });
}

exports.getAllLessons = function(req,res){
    var query = Lesson.find({},{_id:0, __v:0}).
    exec(function(err, docs){
        console.log("docs:" + docs);
        res.json(docs);
        return;
    });
}

exports.updateLesson = function(req, res){
    console.log(req.body);
    

}



   //select('subject grade lessonTitle date presentationUrl').