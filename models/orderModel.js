var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
const product=require('./productModel')
const user=require('./userModel')
var productOrderSchema = new Schema({
	product : {
		type: Schema.Types.ObjectId,
		ref: product
   },
   quantity:Number	
})
var orderSchema = new Schema({
	'quantity' : Number,
	'sum' : Number,
	'date' : Date,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'items' : [productOrderSchema]

});



module.exports = mongoose.model('order', orderSchema);

