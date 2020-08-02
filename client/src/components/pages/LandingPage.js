import React, {  Fragment } from "react";
import PostForm from "../posts/PostForm";
import PostFilter from "../posts/PostFilter";
import Posts from "../posts/Posts";
// import AuthContext from "../../context/auth/authContext";

const LandingPage = () => {
	return (
		<Fragment>
			<div className="grid-2">
				<div>
					<Posts />
				</div>
				<div>
					<PostFilter/>
					<PostForm />
				</div>
			</div>
		</Fragment>
	);
};

export default LandingPage;
