import {
	GET_POSTS,
	ADD_POST,
	DELETE_POST,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_POSTS,
	POST_ERROR,	
	CLEAR_POSTS,
	CLEAR_FILTER,
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts],
				loading: false,
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
				loading: false,
			};
		case CLEAR_POSTS:
			return {
				...state,
				posts: null,
				filtered: null,
				error: null,
				current: null,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_POSTS:
			return {
				...state,
				filtered: state.post.filter((post) => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return post.type.match(regex);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case POST_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
