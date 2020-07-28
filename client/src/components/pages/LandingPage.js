import React, { useEffect, useContext } from "react";
import PostForm from "../posts/PostForm";
import PostFilter from "../posts/PostFilter";
import Posts from "../posts/Posts";
import AuthContext from "../../context/auth/authContext";


const LandingPage = () => {
	
	const authContext = useContext(AuthContext);

	useEffect(() => {
		
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="grid-2">
			<div>
				<PostForm />
			</div>
			<div>
				<PostFilter />
				<Posts />
			</div>
		</div>
	);
};

export default LandingPage;
