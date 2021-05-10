import React from 'react';
import Post from './Post';
import axios from 'axios';
import { URL } from '../configurations/url';
import { Button, Input } from 'semantic-ui-react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catalogue: [],
			title: '',
			filtered: [],
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axios
			.get(`${URL}/posts`)
			.then((res) => {
				console.log('data has being received ==>', res.data);
				var data = res.data;
				this.setState({ catalogue: data });
			})
			.catch(() => {
				alert('Error retrieving data!');
			});
	};

	handleOnChange = (e) => {
		this.setState({ title: e.target.value });
		this.setState({ writer: e.target.value });

		e.preventDefault();
		console.log('title ===>', this.state.title);

		let previousList = this.state.catalogue;
		console.log('previousList ======>', previousList);

		let newList =
			previousList.filter((data) =>
				data.title.toLowerCase().includes(this.state.title)
			) &&
			previousList.filter((data) =>
				data.writer.toLowerCase().includes(this.state.writer)
			);

		console.log('newList ===>', newList);

		this.setState({ filtered: newList });
	};

	handleOnClick = (event) => {
		event.preventDefault();
	};

	render() {
		let filter;

		if (this.state.title !== '') {
			filter = this.state.filtered.map((d, i) => (
				<Post
					key={i}
					title={d.title}
					body={d.body}
					createdAt={d.createdAt}
					img={d.img}
					metaDescription={d.metaDescription}
					writer={d.writer}
					alt={d.alt}
				/>
			));
		} else {
			filter = this.state.catalogue.map((d, i) => (
				<Post
					key={i}
					title={d.title}
					body={d.body}
					createdAt={d.createdAt}
					img={d.img}
					metaDescription={d.metaDescription}
					writer={d.writer}
					alt={d.alt}
				/>
			));
		}

		return (
			<div>
				<form onChange={this.handleOnChange} onSubmit={this.handleOnClick}>
					<input
						placeholder=" 🔍 Search Blog..."
						className="search-blog"
					></input>
				</form>
				<span>{filter}</span>
			</div>
		);
	}
}

export default Home;
