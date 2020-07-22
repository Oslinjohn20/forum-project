import React from "react";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
	GET_POSTS,
	ADD_POST,
	DELETE_POST,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_POSTS,
	CLEAR_POSTS,
	CLEAR_FILTER,
	POST_ERROR,
} from "../types";

const PostState = (props) => {
	const initialState = {
		posts: null,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

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

	// Clear Posts
	const clearPosts = () => {
		dispatch({ type: CLEAR_POSTS });
	};

	// Set current Post
	const setCurrent = (post) => {
		dispatch({
			type: SET_CURRENT,
			payload: post,
		});
	};

	// Clear current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	//Filtering Posts
	const filterPosts = (text) => {
		dispatch({ type: FILTER_POSTS, payload: text });
	};

	//Clear Filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
    };
    

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addPost,
                deletePost,
                setCurrent,
                clearCurrent,
                filterPosts,
                clearFilter,
                getPosts,
                clearPosts,
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
};

export default PostState;