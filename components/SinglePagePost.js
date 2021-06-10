import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../configurations/url';
import Post from './Post';

const SinglePagePost = (props) => {
	const [post, setPost] = useState({});

	useEffect(() => {
		getData();
	}, []);

	let getData = () => {
		axios
			.get(`${URL}/posts/${props.id}`)
			.then((res) => {
				console.log('data has being received ==>', res.data);
				var data = res.data;
				setPost(data.filter((d) => d._id === props.id));
			})
			.catch(() => {
				alert('Error retrieving data HERE!');
			});
	};

	return (
		<Post
			key={props.i}
			title={props.title}
			createdAt={props.createdAt}
			img={props.img}
			body={props.body}
			metaDescription={props.metaDescription}
			writer={props.writer}
			alt={props.alt}
		/>
	);
};

export default SinglePagePost;
