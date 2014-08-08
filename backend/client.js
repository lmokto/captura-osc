var osc = require('../lib/osc.js'),
	client = new osc.Client('127.0.0.1', 3000),
	_ = require('underscore');

var random = function(range, count){
	return Math.floor(range) + _.random(count)
};

setInterval(function(){
	
	client.send('/sensor_1', random(200, 100));
	//client.send('/sensor_2', random(800, 50));
	//client.send('/sensor_3', random(500, 100));

}, 1000);