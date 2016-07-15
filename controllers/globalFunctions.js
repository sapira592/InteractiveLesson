exports.updateDate = function(doc, date){
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