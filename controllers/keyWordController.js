var mongoose = require('mongoose');
var KeyWord = require('../schemas/keyWord');

exports.createKeyWord =function(req, res){
    var keyWordObject = {
        title: req.body.Keyword,
        info: req.body.Description,
        lessonID: ["gfgfdgd344535", "kkk"]
    }
    KeyWord.create(keyWordObject, function(err,data){
        if(err){
            res.json({success:false, message:err});
            return;
        }
        res.json({success:true, message:data});
    });

}

exports.getAllKeyWordOfLesson = function(req,res){
    KeyWord.find({lessonID:"gfgfdgd344535"}).
     select('title info -_id').
        exec(function(err, docs){       
        if(err){
            console.log("error: " + err);
            return 0;
         }                 
         if(!docs[0]){
            res.json({ success: false, message: 'There is no keyWords in this lesson.' });
            return 0;
         }
         else{
            console.log("keyWords: " + docs);
            res.json(docs);
            return;
           }

     });
}

/*exports.updateKeyWord = function(req,res){
    var title = 
    keyWord.find({lessonID:"gfgfdgd344535"}).
     select('title info -_id').
        exec(function(err, docs){       
        if(err){
            console.log("error: " + err);
            return 0;
         }                 
         if(!docs[0]){
            res.json({ success: false, message: 'There is no keyWords in this lesson.' });
            return 0;
         }
         else{
            console.log("keyWords: " + docs);
            res.json(docs);
            return;
           }

     });
}*/
