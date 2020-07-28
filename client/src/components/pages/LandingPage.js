import React, { useEffect, useContext } from "react";
import Post from "../posts/Post";
import PostFilter from "../posts/PostFilter";
import Posts from "../posts/Posts";
import AuthContext from "../../context/auth/authContext";
import PostContext from "../../context/post/postContext"

const LandingPage = () => {
	
	const postContext = useContext(PostContext);

	useEffect(() => {
		
		postContext.loadPost();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="grid-2">
			<div>
				<Post />
			</div>
			<div>
				<PostFilter />
				<Posts />
			</div>
		</div>
	);
};

export default LandingPage;
