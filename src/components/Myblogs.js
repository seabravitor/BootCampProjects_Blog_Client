//import React, { useEffect, useState } from 'react';
//import Post from './Post';
//
//function myBlog() {
//	const [catalogue, setCatalogue] = [];
//	const [filter, setFilter] = [];
//
//	useEffect;
//
//	getData = () => {
//		const token = JSON.parse(localStorage.getItem('token'));
//		axios
//			.get(`${URL}/posts`) //check route
//			.then((res) => {
//				console.log('data has being received ==>', res.data);
//				var data = res.data;
//				this.setState({ catalogue: data });
//			})
//			.catch(() => {
//				alert('Error retrieving data!');
//			});
//	};
//
//	return (
//		<div>
//			<Post author={author} />
//		</div>
//	);
//}
//
//export default myBlog;
