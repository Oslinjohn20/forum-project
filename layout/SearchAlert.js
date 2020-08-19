import React from "react";

const SearchAlert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`alert alert -${alert.type}`}>
				<i className="fa fa-exclamation-circle" />
				{alert.msg}
			</div>
		)
	);
};

export default SearchAlert;
