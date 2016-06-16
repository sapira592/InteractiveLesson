var mongoose = require('mongoose');
var multipleChoice = require('../schemas/activity');
var id = 100;

exports.createMultipleChoice =function(req, res){
    console.log(req.body);
    var MultipleChoiceObject = {
        id: id,
        type: "multiple Choice",
        lessonTitle: "Roma",
        questions: req.body.Question
        answers: [req.body.Answer1, req.body.Answer2, req.body.Answer3 ]
    }
    id++;
    multipleChoice.create(MultipleChoiceObject, function(err,data){
        if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }
        res.json({success:true, message:data});
            return;
    });
}
