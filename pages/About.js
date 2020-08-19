import React from "react";
import PropTypes from "prop-types";

const About = ({ title, icon }) => {
	return (
		<div className="about-container">
			<h1 className="bg-dark">
				<i className={icon} /> {title}
			</h1>

			<div className="text-dark">
				<h3>About this web application</h3>
				<p>
					This is a fullstack application which is connected to a server as a
					backend.
				</p>
				<p className="bg-dark p">
					<strong>Version:</strong>1.0.0
				</p>
			</div>
		</div>
	);
};

About.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

About.defaultProps = {
	title: "Wrench",
	icon: "fas fa-build",
};

export default About;
