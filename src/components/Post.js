import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../configurations/url';

function Post(props) {
	const [buttonDelete, setButtonDelete] = useState(false);

	useEffect(() => {
		verifyMyBlog();
	}, []);

	let verifyMyBlog = () => {
		if (props.isMyBlog === true) {
			setButtonDelete(true);
		} else {
			setButtonDelete(false);
		}
	};

	let deleteBlog = () => {
		var id = props.id;
		axios
			.delete(`${URL}/posts/${id}`)
			.then((res) => {
				if (res.status === 200) {
					window.location = '/';
				}
			})
			.catch((error) => {
				console.log('Error deleting post! ', error);
			});
	};

	return (
		<div className="myBlogs">
			<div key={props.index} className="postsGeneral">
				<span>
					<img src={props.img} alt={props.alt}></img>
					<span className="postDetails">
						<h5>Author: {props.writer}</h5>
						<h6>{props.createdAt}</h6>
					</span>
				</span>
				<span className="postCenter">
					<h2>{props.title}</h2>
					<h4>
						<i>{props.metaDescription}</i>
					</h4>
				</span>
				<br></br>
				<span>
					<p className="postBody">{props.body}</p>
				</span>
				<br></br>
				<br></br>
			</div>
			{buttonDelete && (
				<button type="button" className="deleteButton" onClick={deleteBlog}>
					Delete
				</button>
			)}
		</div>
	);
}

export default Post;
