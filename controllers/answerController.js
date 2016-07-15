var mongoose = require('mongoose');
var Answer = require('../schemas/answer');
var Question = require('../schemas/question');
var globalFunctions = require('./globalFunctions');

exports.addAnswer =function(req, res){
    var AnswerObject = {
        name: req.body.name,
        answer: req.body.answer, 
        date: null,
        questionID: req.body.questionID
    }
    Answer.create(AnswerObject, function(err,doc){
        if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }

        Question.findOne({_id:doc.questionID}).
        exec(function(err, question){
            if(err){
                console.log("error: " + err);
                return 0;
             }                 
             else{
                if(question.answerIDList){
                     question.answerIDList.push(doc._id);
                }
                else question.answerIDList[0] = doc._id;
                question.save();
            }
         }); 

        globalFunctions.updateDate(doc,doc._id.getTimestamp());
        res.json({success:true, message:doc});
        return;
    });
}

exports.getAllAnswers = function(req, res){
    var id = req.body.questionID;
    console.log(id);
    Answer.find({questionID:id},{_id:0}).
        select('answer date').
    exec(function(err, docs){
        if(err){
            console.log("error: " + err);
            return 0;
         }                 
         if(!docs[0]){
            res.json({ success: false, message: 'There are no Answers for this question.' });
            return 0;
         }
         else{
            console.log("Answers: " + docs);
            res.json(docs);
            return;
        }
    });
}

