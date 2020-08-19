import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const post = await axios.get("api/posts");
		setPosts(post.data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	// i = iteration

	const displayPost = () => {
		return posts.map((post, i) => {
			return (
				<ul>
					<Link to={`/posts/${post._id}`} key={i}>
						<p className="inner">{post.title}</p>
					</Link>
				</ul>
			);
		});
	};

	return (
		<div>
			<h1>Posts</h1>
			<div>{displayPost()}</div>
		</div>
	);
};
export default Posts;
