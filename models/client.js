// module dependecies
var mongoose = require("mongoose");

// Schema
var ClientSchema = mongoose.Schema({
	username: {type: String, required: true, unique: true},
	full_name: {type: String, required: true},
});

// Returned model
module.exports = mongoose.model('Client', ClientSchema);