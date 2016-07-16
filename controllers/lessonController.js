var mongoose = require('mongoose');
var Lesson = require('../schemas/lesson');
var Teacher = require('../schemas/teacher');

exports.createLesson =function(req, res){
    console.log(req.body);
    var lessonObject = {
        id:req.body.id,
        subject: req.body.subject,
        grade: req.body.grade,
        lessonTitle: req.body.lessonTitle,
        date: req.body.date,
        presentationUrl:null,
        teacherID:null
    }
    Lesson.create(lessonObject, function(err,data){
        if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }

        Teacher.findOne({id:"12345909"}).
        exec(function(err, doc){
            if(err){
                console.log("error: " + err);
                return 0;
             }                 
             else{
                if(doc.lessonList){
                     doc.lessonList.push(data.id);
                }
                else doc.lessonList[0] = data.id;
                doc.save();
            }
         }); 
        res.json({success:true, message:data});
            return;
    });
}

exports.getAllLessonsPerTeacher = function(req,res){
    var query = Lesson.find({teacherID:12345909},{_id:0, __v:0}).
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