import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alerts from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";

import PostState from "./context/post/PostState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";
if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {
	return (
		<AuthState>
			<PostState>
				<AlertState>
					<Router>
						<Fragment>
							<Navbar />
							
						</Fragment>
					</Router>
				</AlertState>
			</PostState>
		</AuthState>
	)
}

export default App;
