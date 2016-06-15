var mongoose = require('mongoose');
var Teacher = require('../schemas/teacher');

exports.login =function(req, res){
       Teacher.findOne({id: req.params.id}, function(err,user){
        if(err){
            console.log("error: " + err);
            return 0;
        } 
            
        if(!user){
            res.json({ success: false, message: 'Login failed. User not found.' });
            return 0;
        }

       if(user.password != req.params.pass){
            res.json({ success: false, message: 'Login failed. User password incorrect.' });
            return 0;
        }

        else{
            res.json({ success: true, message: 'User is logged in.' });
            res.json(user);
            return;
        }
    });
    return;
}
