const express = require("express");
const router = express.Router();

const { validationResult } = require("express-validator");

const Post = require("../models/Post");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.status(500).err(err);
	}
});

// @route   POST api/posts
// @desc    Add a new post
// @access  Public
router.post("/", async (req, res) => {
	const { posts, type } = req.body;

	// Checking for any Errors
	if (!posts) {
		return res.status(400).json({msg: "No posts found" });
	} else if (!type) {
		return res.status(400).json({msg:"No type is shown "})
	}

	try {
		const newPost = new Post({
			posts,
			type,
		});

		const savedPost = await newPost.save();

		res.json(savedPost);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Public
router.delete("/:id", async (req, res) => {
	try {
		let post = await Post.findById(req.params.id);

		if (!post) return res.status(404).json({ msg: "Post not found " });

		await Post.findByIdAndRemove(req.params.id);

		res.json({ msg: "Post Removed " });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
