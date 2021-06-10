import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../configurations/url';
import { Button, Checkbox, Form, Input, TextArea } from 'semantic-ui-react';

class Create extends Component {
	state = {
		userId: '',
		title: '',
		metaDescription: '',
		keywords: '',
		body: '',
		writer: '',
		createdAt: new Date(),
		image: DefaultImg,
	};

	componentDidMount() {
		this.handleCustomerId();
	}

	handleCustomerId = () => {
		const id = {
			userId: this.state.userId,
		};

		axios({
			url: `${URL}/users/admin`,
			method: 'GET',
			data: id,
		})
			.then((res) => {
				console.log('User data has being received ==>', res.data);
				var data = res.data;
				this.setState({ userId: data._id });
			})
			.catch(() => {
				alert('Error retrieving data!');
			});
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const dataLoad = {
			userId: this.state.userId,
			title: this.state.title,
			metaDescription: this.state.metaDescription,
			keywords: this.state.keywords,
			body: this.state.body,
			writer: this.state.writer,
			createdAt: this.state.createdAt,
		};

		console.log('dataLoad ===>', dataLoad);
		axios({
			url: `${URL}/posts/create`,
			method: 'POST',
			data: dataLoad,
		})
			.then((res) => {
				if (res.status === 200) {
					window.location = '/';
				}
			})
			.catch((error) => {
				console.log('Internal server error => ', error);
			});
	};

	handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({ [name]: value });
		console.log({ [name]: value });
	};

	render() {
		return (
			<div>
				<br />
				<h2 className="createBlogTitle">
					... Everything you can imagine is real ...
				</h2>
				<Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
					<Form.Field
						name="User ID"
						value={this.state.userId}
						className="createBlogOthers"
					/>
					<Form.Field
						control={Input}
						label="Title"
						name="title"
						value={this.state.title}
						placeholder="Title"
						className="createBlogInputs"
					/>
					<Form.Field
						control={Input}
						label="Keywords"
						name="keywords"
						placeholder="Keywords (SEO)"
						value={this.state.keywords}
						className="createBlogInputs"
					/>
					<Form.Field
						control={Input}
						label="Author"
						placeholder="Full Name"
						name="writer"
						value={this.state.writer}
						className="createBlogInputs"
					/>
					<Form.Field
						control={TextArea}
						label="Metadescription"
						placeholder="Blog Description"
						name="metaDescription"
						value={this.state.metaDescription}
						className="createBlogMeta"
					/>
					<Form.Field
						control={Date}
						name="createdAt"
						value={this.state.createdAt}
						className="createBlogOthers"
					/>
					<Form.Field
						control={TextArea}
						label="Here it goes your text"
						placeholder="Tell us more about what do you want share today..."
						name="body"
						value={this.state.body}
						className="createBlogBody"
					/>
					<Form.Field
						control={Checkbox}
						label="I agree to the Terms and Conditions"
						className="createBlogOthers"
					/>
					<Form.Field
						control={Button}
						onSubmit={this.handleSubmit}
						className="createBlogButton"
					>
						Submit
					</Form.Field>
				</Form>
			</div>
		);
	}
}

export default Create;
