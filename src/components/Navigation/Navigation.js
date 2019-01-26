import React from 'react';
import 'tachyons';


const Navigation = (props) => {
		console.log(props.isSignedIn);
		if (props.isSignedIn) {
			console.log('nav is signed in...', props.isSignedIn);
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='f3 dim link pa3 pointer' onClick={() => props.onRouteChange('signout')}>Sign Out</p>
				</nav>
			)
		} else {
			console.log('nav else...', props.isSignedIn);
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='f3 dim link pa3 pointer' onClick={() => props.onRouteChange('signin')}>Sign In</p>
					<p className='f3 dim link pa3 pointer' onClick={() => props.onRouteChange('register')}>Register</p>
				</nav>
			)
		}
}

export default Navigation;