import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchTypes, showClear, clearPosts, setAlert }) => {
	const [filterText, setFilterText] = useState("");

	const onChange = (e) => {
		setFilterText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (filterText === "") {
			setAlert("Please enter post type", "dark");
		} else {
			searchTypes(filterText);
			setFilterText("");
		}
	};
	return (
		<div className="container">
			<form onSubmit={onSubmit}>
				<div className="search-wrapper">
					<span className="search-span">Search</span>
					<input
						type="text"
						name="type"
						placeholder="Question or Answer"
						value={filterText}
						onChange={onChange}
					/>
					<button type="submit" className="search-btn">
						<i className="fa fa-search" aria-hidden="true" />
					</button>
				</div>
			</form>
			{showClear && (
				<button className="clear-btn btn-dark btn-block" onClick={clearPosts}>
					{""}
					Clear Search
				</button>
			)}
		</div>
	);
};

SearchBar.propTypes = {
    searchTypes: PropTypes.func.isRequired,
    clearPosts: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default SearchBar;
