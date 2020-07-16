const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(400).send("No posts found")
	}
});

// @route   POST api/posts
// @desc    Add a new post
// @access  Public
router.post("/", (req, res) => {
	res.send("Post made");
});

// @route   PUT api/posts/:id
// @desc    Update post
// @access  Public
router.put("/:id", (req, res) => {
	res.send("Update post ");
});

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Public
router.delete("/:id", (req, res) => {
	res.send("Delete post ");
});

module.exports = router;
