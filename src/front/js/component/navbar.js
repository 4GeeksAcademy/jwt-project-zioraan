import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getUser();
	  }, []);

	

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.user ? (
						<div>
							<button onClick={(e) => actions.handleSignout()}>Sign Out</button>
							<Link to="/private">
								<button className="btn btn-primary">Private</button>
							</Link>
						</div>
      				) : (
        				<div>
							<Link to="/signup">
								<button className="btn btn-primary">Sign Up!</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-primary mx-2">Log in</button>
							</Link>
						</div>
      				)}	
				</div>
			</div>
		</nav>
	);
};
