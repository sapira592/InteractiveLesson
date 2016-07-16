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
        teacherID:12345909
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
    var query = Lesson.find({teacherID:12345909},{}).
    exec(function(err, docs){
        console.log("docs:" + docs);
        res.json(docs);
        return;
    });
}

exports.updateLesson = function(req, res){
    console.log(req.body);
    console.log(req.file);
    Lesson.findOne({id:req.body.id},function(err,data){
        if(err){
            console.log(err);
            res.json({success:false,data:err});
            return;
        }
        if(data == null) {
            console.log("Lesson Not Found " + req.body.id);
            res.json({success:false , data:"Lesson Not Found"});
            return

        }
        data.presentationUrl = req.file.filename;
        data.save(function(err){
            if(err){
                console.log(err);
                res.json({success:false,data:err});
            } else {
                res.json({success:true});
            }
        })
    });

}



   //select('subject grade lessonTitle date presentationUrl').