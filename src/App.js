import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { URL } from '../configurations/url';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Admin from './components/Admin.js';
import Create from './components/Create.js';
import MyBlogs from './components/MyBlogs';

class App extends React.Component {
	state = {
		catalogue: [],
		error: '',
		search: '',
		filtered: [],
		isLoggedIn: false,
	};

	componentDidMount() {
		this.verify_token();
	}

	verify_token = async () => {
		const token = JSON.parse(localStorage.getItem('token'));
		if (token === null)
			return this.setState({
				...this.state,
				isLoggedIn: false,
			});
		try {
			axios.defaults.headers.common['Authorization'] = token;
			const response = await axios.post(`${URL}/users/verify_token`);
			return response.data.ok
				? this.setState({
						...this.state,
						isLoggedIn: true,
				  })
				: this.setState({
						...this.state,
						isLoggedIn: false,
				  });
		} catch (error) {
			console.log(error);
		}
	};

	login = (token) => {
		localStorage.setItem('token', JSON.stringify(token));
		console.log('token ===>', token);
		this.setState({
			...this.state,
			isLoggedIn: true,
		});
		console.log('isLoggedIn ===>', this.state.isLoggedIn);
	};

	logout = () => {
		localStorage.removeItem('token');
		this.setState({
			...this.state,
			isLoggedIn: false,
		});
	};

	render() {
		return (
			<div>
				<Router>
					<Navbar isLoggedIn={this.state.isLoggedIn} />
					<Route exact path="/" component={Home} />
					<Route
						path="/login"
						render={(props) =>
							this.state.isLoggedIn ? (
								<Redirect to={'/admin'} />
							) : (
								<Login login={this.login} {...props} />
							)
						}
					/>
					<Route
						path="/register"
						render={(props) =>
							this.state.isLoggedIn ? (
								<Redirect to={'/admin'} />
							) : (
								<Register {...props} />
							)
						}
					/>
					<Route
						path="/admin"
						render={(props) =>
							!this.state.isLoggedIn ? (
								<Redirect to={'/'} />
							) : (
								<Admin logout={this.logout} {...props} />
							)
						}
					/>
					<Route
						path="/create"
						render={(props) =>
							!this.state.isLoggedIn ? <Redirect to={'/login'} /> : <Create />
						}
					/>
					<Route
						path="/myblogs"
						render={(props) =>
							!this.state.isLoggedIn ? <Redirect to={'/login'} /> : <MyBlogs />
						}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
