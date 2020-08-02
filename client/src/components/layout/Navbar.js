import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import PostContext from "../../context/post/postContext";

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const postContext = useContext(PostContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearPosts } = postContext;

	const onLogout = () => {
		logout();
		clearPosts();
	};

	const authLinks = (
		<Fragment>
			<li>Helllo {user && user.name}</li>
			<li>
				<a onClick={onLogout} href="!#">
					<i className="fas fa-icon-sign-out"></i>
					<span className="hide-sm">Logout</span>
				</a>
			</li>
			<li>
				<Link to="/landingpage">Home</Link>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">
					Register
					<i className="fas fa-user-plus" />{" "}
				</Link>{" "}
			</li>
			<li>
				<Link to="/login">
					{" "}
					Login
					<i className="fas fa-sign-in-alt" />{" "}
				</Link>
			</li>
			<li>
				<Link to="/about">
					About
					<i className="fas fa-info-circle"/>
				</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				{title}{" "}
				<i className={icon} />
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Wrench Forum",
	icon: "fas fa-wrench",
};

export default Navbar;
