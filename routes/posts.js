const express = require("express");
const router = express.Router();

// @route   GET api/posts
// @desc    Get all posts 
// @access  Public
router.get("/", (req, res) => {
	res.send("Posts made by user");
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
