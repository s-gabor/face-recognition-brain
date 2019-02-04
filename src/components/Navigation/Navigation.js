import React from 'react';
import 'tachyons';


const Navigation = (props) => {
		if (props.isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='f3 dim link pa3 pointer' onClick={() => props.onRouteChange('signout')}>Sign Out</p>
				</nav>
			)
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='f3 dim link pa3 pointer' onClick={() => props.onRouteChange('signin')}>Sign In</p>
					<p className='f3 dim link pa3 pointer' onClick={() => props.onRouteChange('register')}>Register</p>
				</nav>
			)
		}
}

export default Navigation;