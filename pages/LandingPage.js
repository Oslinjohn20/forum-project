import React, { Fragment, Component } from "react";
import SearchBar from "../layout/SearchBar";
import SearchAlert from "../layout/SearchAlert";
import PostState from "../../context/post/PostState";
import PropTypes from "prop-types";
import axios from "axios";
import PostForm from "../posts/PostForm";
import Posts from "../posts/Posts";

class LandingPage extends Component {
	static defaultProps = {
		title: "Wrench",
		icon: "fas fa-build",
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	state = {
		Posts,
	};

	searchTypes = async (filterText) => {
		this.setState({ loading: true });
		const res = await axios.get("api/posts");
		this.setState({
			posts: res.data,
			loading: false,
			filterText: filterText.toUpperCase().trim(),
		});
	};

	clearPosts = () =>
		this.setState({ posts: [], loading: false, filterText: "" });

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });

		setTimeout(() => this.setState({ alert: null }), 1000);
	};

	render() {
		return (
			<PostState>
				<Fragment>
					{/* <div className="landingpage-container">
						<h1 className="bg-dark">
							<i className={this.props.icon} /> {this.props.title}
						</h1>
					</div>{" "}
					<SearchAlert alert={this.state.alert} />
					<div className="search-container">
						<SearchBar
							searchTypes={this.searchTypes}
							clearPosts={this.clearPosts}
							showClear={this.state.posts.length > 0 ? true : false}
							setAlert={this.setAlert}
						/>

						<div className="post-container">
							<Posts
								filterText={this.state.filterText}
								loading={this.state.loading}
								posts={this.state.posts}
							/>
						</div>
					</div> */}
					<Posts/>
					<PostForm />
				</Fragment>
			</PostState>
		);
	}
}
export default LandingPage;
