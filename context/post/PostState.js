import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
	GET_POSTS,
	ADD_POST,	
	CLEAR_FILTER,
	POST_ERROR,
	DELETE_POST,
	FILTER_POSTS
} from "../types";

const PostState = (props) => {
	const initialState = {
		posts: [],
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	//Getting Posts
	const getPosts = async () => {
		try {
			const res = await axios.get("/api/posts");

			dispatch({
				type: GET_POSTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: err.response.msg,
			});
		}
	};

	//Add Post
	const addPost = async (post) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/posts", post, config);

			dispatch({
				type: ADD_POST,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: err.response.msg,
			});
		}
	};

	// Deleting a Post
	const deletePost = async (id) => {
		try {
			await axios.delete(`/api/posts/${id}`);

			dispatch({
				type: DELETE_POST,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: POST_ERROR,
				payload: err.response.msg,
			});
		}
	};
	
	

	//Filtering Posts
	const filterPosts = (type) => {
		dispatch({ type: FILTER_POSTS, payload: type });
	};

	//Clear Filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,				
				filtered: state.filtered,				
				getPosts,
				addPost,
				deletePost,				
				filterPosts,
				clearFilter,
				
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
