import React, { useEffect, useState } from 'react';
import { URL } from '../configurations/url';
import Post from './Post';
import axios from 'axios';

const MyBlogs = (props) => {
	const [catalogue, setCatalogue] = useState({});
	const [user, setUser] = useState({});

	useEffect(() => {
		getData();
	});

	const getData = async () => {
		await axios
			.get(`${URL}/users/admin`)
			.then((res) => {
				console.log('User info has been received ==>', res.data);
				var data = res.data;
				setUser(data._id);
			})
			.catch((error) => {
				console.log('Error retrieving customer data!', error);
			});

		await axios
			.get(`${URL}/posts`)
			.then((res) => {
				console.log('data has been received ==>', res.data);
				var data = res.data;
				setCatalogue(data.filter((d) => d.userId === user));
			})
			.catch((error) => {
				console.log('Error retrieving posts! ', error);
			});
	};

	let renderPage = () => {
		return catalogue?.length > 0 ? (
			catalogue.map((d, i) => (
				<Post
					id={d._id}
					key={i}
					title={d.title}
					createdAt={d.createdAt}
					img={d.img}
					metaDescription={d.metaDescription}
					writer={d.writer}
					alt={d.alt}
					body={d.body}
					isMyBlog={true}
				/>
			))
		) : (
			<h4>There was no blog written yet</h4>
		);
	};

	return (
		<div>
			<br></br>
			<h2 className="createBlogTitle">My Blogs</h2>
			{renderPage()}
		</div>
	);
};

export default MyBlogs;
