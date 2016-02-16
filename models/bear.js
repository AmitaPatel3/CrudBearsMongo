//this is a schema: it's a blueprint that tells it what a bear looks like//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: String,
	age: Number,
	gender: String
});

module.exports = mongoose.model('Bear', BearSchema); //mounting BearSchema into Bear