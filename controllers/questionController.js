var mongoose = require('mongoose');
var Question = require('../schemas/question');

exports.addQuestion =function(req, res){
    var QuestionObject = {
        stName: "name", // will get by session
        question: req.body.Question, 
        date: null,
        answerIDList: [],
    }
    Question.create(QuestionObject, function(err,doc){
        if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }       
        updateDate(doc,doc._id.getTimestamp());
        res.json({success:true, message:doc.date});
        return;
    });
}

exports.getAllQuestions = function(req, res){
	var query = Question.find({},{_id:0, __v:0}).
    exec(function(err, docs){
        if(err){
            console.log("error: " + err);
            return 0;
         }                 
         if(!docs[0]){
            res.json({ success: false, message: 'There are no Questions in this lesson.' });
            return 0;
         }
         else{
            console.log("Questions: " + docs);
            res.json(docs);
            return;
           }
    });
}

var updateDate = function(doc, date){
	var query = doc.update({
        $set: {date:date}
    });
	query.exec(function(err, res){
		if(err){
            console.log("error");
            res.json({success:false, message:err});
            return;
        }
        console.log(JSON.stringify(res));
	});
}