import React from 'react';
import 'tachyons';


class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(response => response.json())
			.then(user => {
				console.log(user);
				this.props.onRouteChange('home');
			})
			.catch(err => console.log('Errorrrrr from fetch onSignIn!', err))
	}

	render() {
		return (
			<div className=''>
				<main className="pa4 black-80 center">
				  <div className="measure pa3 br3 o-70 shadow-5 Tilt">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Register</legend>
				      <div className="">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name" 
				        	onChange={ this.onNameChange }
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" 
				        	onChange={ this.onEmailChange }
				        />
				      </div>

				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" 
				        	onChange={ this.onPasswordChange }
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={ this.onRegister }
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register" 
				      />
				    </div>
				  </div>
				</main>
			</div>
		);
	}
}

export default Register;