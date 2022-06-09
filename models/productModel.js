var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'name' : String,
	'price' : Number,
	'imgName' : String,
	'description' : String,
	'category' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'category'
	}
});

module.exports = mongoose.model('product', productSchema);
