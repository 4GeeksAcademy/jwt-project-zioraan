import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	
	return (
		<div className="container">
			<div className="col-2 mx-auto">
				<h1>Log In</h1>
				<br />
				<label htmlFor="email"><strong>E-mail</strong></label>
				<input type="email" placeholder="E-mail address" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
				<br />
				<label htmlFor="login-password"><strong>Password</strong></label>
				<input type="password"  id="login-password" name="login-password" onChange={(e) => setPassword(e.target.value)}></input>
				<button onClick={(e) => actions.handleLogin(email, password)}>Log in</button>
			</div>
		</div>
	);
};
