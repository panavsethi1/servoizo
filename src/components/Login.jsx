import React from 'react';
import logo from '../assets/img/logo.png';

function Login() {
	return (
		<div className='login'>
			<div className='login__left'>
				<h1>Welcome</h1>
			</div>
			<div className='login__right'>
				<div className='login__right__box'>
					<div className='login__right__box__img'>
						<img src={logo} alt='' />
					</div>
					<div className='login__right__box__header'>
						<h1>Login Account</h1>
					</div>
					<div className='login__right__box__inputs'>
						<input
							id='email'
							type='email'
							placeholder='Email'></input>
						<input
							id='password'
							type='password'
							placeholder='Password'></input>
					</div>
					<div className='login__right__box__signed-in'>
						<label className='checkbox-container'>
							Keep me signed in
							<input type='checkbox' id='signed-in' />
							<span className='checkmark'></span>
						</label>
					</div>
					<div className='login__right__box__button'>
						<a href='/dashboard'>Login</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
