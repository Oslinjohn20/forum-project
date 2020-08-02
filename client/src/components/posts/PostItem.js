import React, { useContext } from "react";
import PropTypes from "prop-types";
import PostContext from "../../context/post/postContext";

const PostItem = ({ post }) => {
	const postContext = useContext(PostContext);
	const { deletePost, setCurrent, clearCurrent } = postContext;

	const { _id, item, type } = post;

	const onDelete = () => {
		deletePost(_id);
		clearCurrent();
	};

	return (
		<div className="card bg-primary">
			<h3 className="text-primary text-right">
				{item}
				{" "}
				<span
					style={{ float: "right" }}
					className={
						"badge" +
						(type === "question" ? "badge badge-succes" : "badge-primary")
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<p>
				<button
					className="btn btn-dark btn-sm"
					onClick={() => setCurrent(post)}
				>
					Edit
				</button>
				<button className="bt btn-danger btn-sm" onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
};

export default PostItem;
