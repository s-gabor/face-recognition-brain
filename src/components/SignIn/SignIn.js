import React from 'react';
import '../Logo/Logo.css';
import 'tachyons';


const SignIn = () => {
	return (
		<div className=''>
			<main className="pa4 black-80 center">
			  <form className="measure pa3 br3 o-70 shadow-5 Tilt">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f3 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>

			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			  </form>
			</main>
		</div>
	);
}

export default SignIn;