import React, { useState, useContext, useEffect } from "react";
import PostContext from "../../context/post/postContext";

const Post = () => {
	const postContext = useContext(PostContext);

	const { addPost, updatePost, clearCurrent, current } = postContext;

	useEffect(() => {
		if (current !== null) {
			setPost(current);
		} else {
			setPost({
				post: "",
				type: "question",
			});
		}
	}, [postContext, current]);

	const [post, setPost] = useState({
		post: [""],
		type: "question",
	});

	const {  type } = post;

	const onChange = (e) => setPost({ ...post, [e.target.post]: e.target });

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
				placeholder="Query..."
				name="post"
				value={post}
				onChange={onChange}
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
            Answer{" "}
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

export default Post;