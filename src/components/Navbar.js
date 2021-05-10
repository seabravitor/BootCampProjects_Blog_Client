import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => (
	<div className="navbar">
		<NavLink exact to={'/'}>
			Blogs
		</NavLink>

		{!isLoggedIn
			? [
					<NavLink exact to={'/register'}>
						Register
					</NavLink>,
					<NavLink exact to={'/login'}>
						Login
					</NavLink>,
			  ]
			: null}

		{isLoggedIn
			? [
					<NavLink exact to={'/create'}>
						Create
					</NavLink>,
					<NavLink exact to={'/admin'}>
						Admin
					</NavLink>,
			  ]
			: null}
	</div>
);

export default Navbar;
