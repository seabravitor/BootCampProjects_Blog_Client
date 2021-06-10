import React from 'react';

const Admin = (props) => {
	return (
		<div className="admin">
			<br />
			<h1>Admin Page</h1>
			<button
				onClick={() => {
					props.history.push('/');
					props.logout();
				}}
			>
				Logout
			</button>
		</div>
	);
};

export default Admin;
