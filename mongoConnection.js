var mongoose = require('mongoose');
config = {
	mongoUrl:'mongodb://db_usr:db_pass@ds013584.mlab.com:13584/interactive_lesson'
};

var options = {
	server: {
	auto_reconnect:true,
	}
};


mongoose.connect(config.mongoUrl, options);
db = mongoose.connection;// global connection variable

db.on('error', function (err) {
	console.log('Mongoose: Error: ' + err);
});

db.on('open', function() {
	console.log('Mongoose: Connection established');
});

db.on('disconnected', function() {
	console.log('Mongoose: Connection stopped, recconect');
	mongoose.connect(config.mongoUrl, options);
});

db.on('reconnected', function () {
	console.info('Mongoose reconnected!');
});

exports.con = mongoose;