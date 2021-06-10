import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../configurations/url';
import { Button, Form, Input } from 'semantic-ui-react';

const Register = (props) => {
	const [form, setValues] = useState({
		email: '',
		password: '',
		password2: '',
	});
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${URL}/users/register`, {
				email: form.email,
				password: form.password,
				password2: form.password2,
			});
			setMessage(response.data.message);
			//console.log(response)
			if (response.data.ok) {
				setTimeout(() => {
					props.history.push('/login');
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Form
				onChange={handleChange}
				onSubmit={handleSubmit}
				className="register"
			>
				<Form.Field control={Input} label="Email" name="email" />
				<Form.Field control={Input} label="Password" name="password" />
				<Form.Field control={Input} label="Repeat Password" name="password2" />
				<Form.Field control={Button} onSubmit={handleSubmit}>
					Submit
				</Form.Field>
			</Form>
			<div className="message">
				<h4>{message}</h4>
			</div>
		</div>
	);
};

export default Register;
