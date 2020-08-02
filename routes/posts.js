const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Post = require("../models/Post");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", auth, async (req, res) => {
	try {
		const posts = await Post.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(400).json({ errors: errors.array() });
	}
});

// @route   POST api/posts
// @desc    Add a new post
// @access  Public
router.post(
	"/",[auth,
	[check("item", "Item is required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { item, type } = req.body;

		try {
			const newPost = new Post({
				item,
				type,
				user: req.user.id,
			});

			const post = await newPost.save();

			res.json({ type, item });
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

// @route   PUT api/posts/:id
// @desc    Update post
// @access  Public
router.put("/:id", auth, async (req, res) => {
	const { item, type } = req.body;

	//Post object
	const postFields = {};
	if (item) postFields.item = item;
	if (type) postFields.type = type;

	try {
		let post = await Post.findById(req.params.id);

		if (!post) return res.status(404).json({ msg: "Post not found" });

		// Make sure user owns post
		if (post.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not Authorized " });
		}

		post = await Post.findByIdAndUpdate(
			req.params.id,
			{ $set: postFields },
			{ new: true }
		);

		res.json(post);
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

		if (!post) return res.status(404).json({ msg: "Post not found " });

		await Post.findByIdAndRemove(req.params.id);

		res.json({ msg: "Post Removed " });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
