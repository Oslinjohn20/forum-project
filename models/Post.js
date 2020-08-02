const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "posts",
	},

	item: {
		type: String,
		
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
