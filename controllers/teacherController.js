var mongoose = require('mongoose');
var Teacher = require('../schemas/teacher');

exports.login =function(req, res){

    console.log(req.body.id + ' ' + req.body.pass);
       Teacher.findOne({id: req.body.id}, function(err,user){
        if(err){
            console.log("error: " + err);
            return 0;
        } 
            
        if(!user){
            res.json({ success: false, message: 'Login failed. User not found.' });
            return 0;
        }

       if(user.password != req.body.pass){
            res.json({ success: false, message: 'Login failed. User password incorrect.' });
            return 0;
        }

        else{
            //req.session.teacherID = req.body.id;
            res.json({ success: true, message: 'User is logged in.' });
            return;
        }
    });
    return;
}
