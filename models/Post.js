const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},

	post: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("post", PostSchema);
