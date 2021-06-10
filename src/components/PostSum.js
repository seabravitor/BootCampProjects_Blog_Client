import React, { useState } from 'react';
import Post from './Post';
import SinglePagePost from './SinglePagePost';

function PostSum(props) {
	const [clicked, setClicked] = useState(false);

	let redirectFullPage = () => {
		setClicked(true);
		console.log('clicked =>', clicked);
		<SinglePagePost id={props.id} />;
	};

	return (
		<div>
			<a onClick={redirectFullPage} className="readButton">
				Read Blog
			</a>
			{!clicked ? (
				<Post
					key={props.i}
					title={props.title}
					img={props.img}
					metaDescription={props.metaDescription}
					writer={props.writer}
					alt={props.alt}
				/>
			) : (
				<SinglePagePost
					key={props.i}
					title={props.title}
					img={props.img}
					writer={props.writer}
					metaDescription={props.metaDescription}
					alt={props.alt}
					body={props.body}
					createdAt={props.createdAt}
				/>
			)}
		</div>
	);
}

export default PostSum;
