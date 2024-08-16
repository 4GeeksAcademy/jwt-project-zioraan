import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [failed, setFailed] = useState(false)

	const handle_submit = async() => {
		let response = await fetch(process.env.BACKEND_URL + "/signup", {
			headers: { "Content-Type": "application/json" }, body: JSON.stringify({email: email, password: password}), method: "POST"
		}) 
		let data = await response.json()
		console.log(data)	
	}

	return (
		<div className="container">
			<div className="col-2 mx-auto">
				<h1>Sign Up</h1>
				<br />
				<label htmlFor="email"><strong>E-mail</strong></label>
				<input type="email" placeholder="E-mail address" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
				<br />
				<label htmlFor="password"><strong>Create Password</strong></label>
				<input type="password"  id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
				<br />
				<button onClick={(e) => handle_submit()} >Sign Up</button>
				{failed == true ? (
        			<h2>Sign up has failed</h2>
      			) : (
        			<h2></h2>
      			)}	
			</div>
		</div>
	);
};
