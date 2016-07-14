var mongoose = require('mongoose');
var Student = require('../schemas/student');


exports.login =function(req, res){
    console.log(req.body.id + ' ' + req.body.password);
       Student.findOne({id: req.body.id}, function(err,user){
        if(err){
            console.log("error: " + err);
            return 0;
        } 
            
        if(!user){
            res.json({ success: false, message: 'Login failed. User not found.' });
            return 0;
        }

       if(user.password != req.body.password){
            res.json({ success: false, message: 'Login failed. User password incorrect.' });
            return 0;
        }

        else{
            res.json({ success: true, message: 'User is logged in.' });
            return;
        }
    });
    return;
}


exports.getStudentsProgressByLesson = function(req, res){   
    var id = req.body.lessonID;
    Student.find({"progress.lessonID":id},{_id:0}).
        select('name gender progress').
        exec(function(err, docs){
        
        if(err){
            console.log("error: " + err);
            return 0;
         }                 
         if(!docs[0]){
            res.json({ success: false, message: 'There is no progress in this lesson.' });
            return 0;
         }
         else{
            for(var i=0; i<docs.length; i++){
                var _progress = docs[i].progress;
                var temp = [];
                console.log(_progress[0]);
                for(var index=0; index < _progress.length; index++){
                    if(_progress[index].lessonID == id){
                        temp.push(_progress[index]);
                    }
                }
                docs[i].progress = temp;
            }
            console.log("ok: " + docs);
            res.json(docs);
            return;
           }

     });
}
