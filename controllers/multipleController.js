var mongoose = require('mongoose');
var MultipleChoice = require('../schemas/multiple');

exports.createMultipleChoice =function(req, res){
    var MultipleChoiceObject = {
        type: "multiple Choice",
        lessonID: "gfgfdgd344535", //will get by session
        questions: req.body.Question,
        answers: [
            {answer:req.body.Answer1, correct:req.body.correct1},
            {answer:req.body.Answer2, correct:req.body.correct2},
            {answer:req.body.Answer3, correct:req.body.correct3},
            {answer:req.body.Answer4, correct:req.body.correct4}
        ]
    }
    MultipleChoice.create(MultipleChoiceObject, function(err,data){
        if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }
        res.json({success:true, message:data});
            return;
    });
}


exports.getAllMultipleChoices =function(req, res){
    var query = MultipleChoice.find({lessonID:"gfgfdgd344535"},{_id:0, __v:0}).
    exec(function(err, docs){
        console.log("docs:" + docs);
        res.json(docs);
        return;
    });
}
