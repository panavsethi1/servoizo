import React, { useEffect, useState } from 'react';
import user from '../assets/img/left-nav/user.png';
import dashboard from '../assets/img/left-nav/dashboard.svg';
import customer from '../assets/img/left-nav/customer.svg';
import devices from '../assets/img/left-nav/devices.svg';
import service from '../assets/img/left-nav/services.svg';
import payment from '../assets/img/left-nav/payment.svg';
import logo from '../assets/img/logo.svg';

function LeftNav({ activeLink }) {
	useEffect(() => {
		document.getElementById(activeLink).classList.add('active');
	}, [activeLink]);

	return (
		<div className='left-nav'>
			<div className='left-nav__user'>
				<div className='left-nav__user__image'>
					<img src={user} alt='User' />
				</div>
				<div className='left-nav__user__text'>
					<p className='left-nav__user__text__greeting'>Hello</p>
					<p className='left-nav__user__text__name'>Antra Gupta</p>
				</div>
			</div>
			<div className='left-nav__earning'>
				<div className='left-nav__earning__box'>
					<div className='left-nav__earning__title'>
						Total Earning
					</div>
					<div className='left-nav__earning__amount'>
						&#8377; 12,345.88
					</div>
				</div>
			</div>
			<div className='left-nav__divider'></div>
			<div className='left-nav__links'>
				<div id='dashboard' className='left-nav__links__item active'>
					<img id='dashboard' src={dashboard} alt='' />
					<p id='dashboard'>Dashboard</p>
				</div>
				<div id='customer' className='left-nav__links__item'>
					<img id='customer' src={customer} alt='' />
					<p id='customer'>Customer</p>
				</div>
				<div id='devices' className='left-nav__links__item'>
					<img id='devices' src={devices} alt='' />
					<p id='devices'>Devices</p>
				</div>
				<div id='service' className='left-nav__links__item'>
					<img id='service' src={service} alt='' />
					<p id='service'>Service</p>
				</div>
				<div id='payment' className='left-nav__links__item'>
					<img id='payment' src={payment} alt='' />
					<p id='payment'>Payment</p>
				</div>
			</div>
			<div className='left-nav__logo'>
				<img src={logo} alt='' />
			</div>
		</div>
	);
}

export default LeftNav;
