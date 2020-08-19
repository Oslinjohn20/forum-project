const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	
	posts: {
		type: String,
		required: true
	},
	type: {
		type: String,
		default: "Question"
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("post", PostSchema);
