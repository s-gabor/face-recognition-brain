import React from 'react';
import 'tachyons';


class SignIn extends React.Component {
	constructor(props) {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user['email']) {
					console.log('user from onSignIn: ', user);
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				} else {
					console.log(user);
				}
			})
			.catch(err => console.log('Errorrrrr from fetch onSignIn!', err))
	}

	render(props) {
		return (
			<div className=''>
				<main className="pa4 black-80 center">
				  <div className="measure pa3 br3 o-70 shadow-5 Tilt">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"
				        	id="email-address"
				        	onChange={this.onEmailChange}
				        />
				      </div>

				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"
				        	onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Sign in" 
				      	onClick={this.onSignIn}
				      />
				    </div>
				  </div>
				</main>
			</div>
		);
		}
	
}

export default SignIn;