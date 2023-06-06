const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	age: {
		type: Number,
		required: false,
	},
	address: {
		type: String,
		required: false,
	},
	job: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("users", userSchema);
