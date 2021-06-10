import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => (
	<div className="navbar">
		<NavLink exact to={'/'} className="navColor">
			Home
		</NavLink>

		{!isLoggedIn
			? [
					<NavLink exact to={'/register'} className="navColor">
						Register
					</NavLink>,
					<NavLink exact to={'/login'} className="navColor">
						Login
					</NavLink>,
			  ]
			: null}

		{isLoggedIn
			? [
					<NavLink exact to={'/create'} className="navColor">
						Create
					</NavLink>,
					<NavLink exact to={'/myblogs'} className="navColor">
						My Blogs
					</NavLink>,
					<NavLink exact to={'/admin'} className="navColor">
						Admin
					</NavLink>,
			  ]
			: null}
	</div>
);

export default Navbar;
