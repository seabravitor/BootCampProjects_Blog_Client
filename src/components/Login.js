import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../configurations/url';
import { Button, Form, Input } from 'semantic-ui-react';

const Login = (props) => {
	const [form, setValues] = useState({
		email: '',
		password: '',
	});
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setValues({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${URL}/users/login`, {
				email: form.email,
				password: form.password,
			});

			setMessage(response.data.message);

			if (response.data.ok) {
				setTimeout(() => {
					props.login(response.data.token);
					props.history.push('/admin');
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Form onChange={handleChange} onSubmit={handleSubmit} className="login">
				<Form.Field control={Input} label="Email" name="email" />
				<Form.Field control={Input} label="Password" name="password" />
				<Form.Field control={Button}>Submit</Form.Field>
			</Form>
			<div className="message">
				<h4>{message}</h4>
			</div>
		</div>
	);
};

export default Login;
