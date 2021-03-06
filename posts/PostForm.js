import React, { useState, useContext, useEffect } from "react";
import PostContext from "../../context/post/postContext";

const PostForm = () => {
	const postContext = useContext(PostContext);

	const { addPost, updatePost, clearCurrent, current } = postContext;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				posts: " ",
				type: "question",
			});
		}
	}, [postContext, current]);

	const [post, setPost] = useState({
		posts: " ",
		type: "question",
	});

	

	const onChange = (e) => setPost({ ...post, [e.target.post]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addPost(post);
		} else {
			
		}
		clearAll();
	};

	const clearAll = () => {
		// clearCurrent();
	};


	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">{current ? "Edit Post" : "Add Post"}</h2>
			<textarea
				type="text"
				placeholder="Query"
				name="posts"
				// value={posts}
				onChange={onChange}
				
				
			/>
			<h5 className="text-dark">Post Type</h5>
			<input
				type="radio"
				name="type"
				value="question"
				// checked={type === "question"}
				onChange={onChange}
			/>
			Question{" "}
			<input
				type="radio"
				name="type"
				value="answer"
				// checked={type === "answer"}
				onChange={onChange}
			/>
			Answer
			<div>
				<input
					type="submit"
					value={current ? "Update Post" : "Add Post"}
					className="btn btn-primary btn-block"
				/>
			</div>
		</form>
	);
 };

export default PostForm;
