import React, { useState, useContext, useEffect } from "react";
import PostContext from "../../context/post/postContext";

const PostForm = () => {
	const postContext = useContext(PostContext);

	const { addPost, updatePost, clearCurrent, current } = postContext;

	useEffect(() => {
		if (current !== null) {
			setCurrent(current);
		} else {
			setCurrent({
				item: "",
				type: "question",
			});
		}
	}, [postContext, current]);

	const [post, setCurrent] = useState({
		item: "",
		type: "question",
	});

	const { item, type } = post;

	const onChange = (e) => setCurrent({ ...post, [e.target.post]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addPost(post);
		} else {
			updatePost(post);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">{current ? "Edit Post" : "Add Post"}</h2>
			<input
				type="text"
				placeholder="Query"
				name="item"
				value={item}
				onChange={onChange}
				style= {{height: "200px"}}
			/>
			<h5 className="text-dark">Post Type</h5>
			<input
				type="radio"
				name="type"
				value="question"
				checked={type === "question"}
				onChange={onChange}
			/>
			Question{" "}
			<input
				type="radio"
				name="type"
				value="answer"
				checked={type === "answer"}
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
			<div>
				{current && (
					<div>
						<button className="btn btn-light btn-block" onClick={clearAll}>
							Clear
						</button>
					</div>
				)}
			</div>
		</form>
	);
};

export default PostForm;