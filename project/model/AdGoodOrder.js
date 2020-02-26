var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var AdGoodOrderSchema = new Schema({
    adid : Number,
    bussinessId : Number,
    name : String,
	phoneNumber : String,
	bussinessName : String,
	address : String,
	ext : String,
	state : Number,
	info : String
});

var AdGoodOrderModel = db.model('AdGoodOrder', AdGoodOrderSchema);
module.exports = AdGoodOrderModel;