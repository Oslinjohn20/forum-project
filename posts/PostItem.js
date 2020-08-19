import React from "react";
import PropTypes from "prop-types";


const PostItem = (props) => {
	const {  posts, type } = props.post;

	

	return (
		<div className="card bg-primary">
			<h3 className="text-primary text-left">
				{posts}
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
			
		</div>
	);
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
};

export default PostItem;
