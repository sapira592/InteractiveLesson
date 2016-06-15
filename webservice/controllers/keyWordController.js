var mongoose = require('mongoose');
var keyWord = require('../schemas/keyWord');
var id = 10;

exports.createKeyWord =function(req, res){
    console.log(req.body);
    var keyWordObject = {
        id: id,
        title: req.body.Keyword,
        info: req.body.Description,
        lessonID: 11111,
    }
    id++;
    console.log(id);
    keyWord.create(keyWordObject, function(err,data){
        if(err){
            res.json({success:false, message:err});
            return;
        }
        res.json({success:true, message:data});
    });

}
