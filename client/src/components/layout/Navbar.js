import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

import "../../App.css";


const Navbar = ({ title }) => {
	const authContext = useContext(AuthContext);
	

	const { isAuthenticated, logout, user } = authContext;
	
 
	const onLogout = () => {
		logout();
		
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
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				
				{title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	
};

Navbar.defaultProps = {
	title: "Wrench Forum",

};

export default Navbar;
