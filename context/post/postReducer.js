import { GET_POSTS, ADD_POST, FILTER_POSTS, CLEAR_FILTER, DELETE_POST } from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
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
				posts: state.posts.filter((post) => post._id !== action.payload),
				loading: false,
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

		default: {
			return state;
		}
	}
};
