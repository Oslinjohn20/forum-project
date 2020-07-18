const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find({ user: req.user }).sort({
			date: -1,
		});
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(400).send("No posts found");
	}
});

// @route   POST api/posts
// @desc    Add a new post
// @access  Public
router.post("/", async (req, res) => {
	const { posts, type } = req.body;

	try {
		const newPost = new Post({
			posts,
			type,
		});

		const post = await newPost.save();

		res.json({ type, posts });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   PUT api/posts/:id
// @desc    Update post
// @access  Public
router.put("/:id", async (req, res) => {
	const { post, type } = req.body;

	try {
		let post = await post.finById(req.params.id);

		if (!post) return res.status(404).json({ msg: "Post not found" });

		
		post = await post.findByIdAndUpdate(
			req.params.id,
			{ $set: postFields },
			{ new: true }
		);

		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Public
router.delete("/:id", async (req, res) => {
	try {
		let post = await Post.findById(req.params.id);

		if (!post) return res.status(404).json({ msg: "Post not found " })
		
		await Post.findByIdAndRemove(req.params.id);

		res.json({msg:"Post Removed "})
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error")
		
	};
});

module.exports = router;
