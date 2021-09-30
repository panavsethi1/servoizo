import React, { useEffect, useState } from 'react';
import user from '../assets/img/left-nav/user.png';
import dashboard from '../assets/img/left-nav/dashboard.svg';
import dashboardColor from '../assets/img/left-nav/dashboard-color.svg';
import customerColor from '../assets/img/left-nav/customer-color.svg';
import customer from '../assets/img/left-nav/customer.svg';
import devicesColor from '../assets/img/left-nav/devices-color.svg';
import devices from '../assets/img/left-nav/devices.svg';
import serviceColor from '../assets/img/left-nav/service-color.svg';
import service from '../assets/img/left-nav/services.svg';
import paymentColor from '../assets/img/left-nav/payment-color.svg';
import payment from '../assets/img/left-nav/payment.svg';
import logo from '../assets/img/logo.svg';

function LeftNav({ activeLink }) {
	useEffect(() => {
		document.querySelectorAll('div').forEach((item) => {
			item.classList.remove('active');
		});
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
				<div id='dashboard' className='left-nav__links__item'>
					{activeLink === 'dashboard' ? (
						<img src={dashboardColor} alt='' />
					) : (
						<img src={dashboard} alt='' />
					)}
					<p>Dashboard</p>
				</div>
				<div id='customer' className='left-nav__links__item'>
					{activeLink === 'customer' ? (
						<img src={customerColor} alt='' />
					) : (
						<img src={customer} alt='' />
					)}
					<p>Customer</p>
				</div>
				<div id='devices' className='left-nav__links__item'>
					{activeLink === 'devices' ? (
						<img src={devicesColor} alt='' />
					) : (
						<img src={devices} alt='' />
					)}
					<p>Devices</p>
				</div>
				<div id='service' className='left-nav__links__item'>
					{activeLink === 'service' ? (
						<img src={serviceColor} alt='' />
					) : (
						<img src={service} alt='' />
					)}
					<p>Service</p>
				</div>
				<div id='payment' className='left-nav__links__item'>
					{activeLink === 'payment' ? (
						<img src={paymentColor} alt='' />
					) : (
						<img src={payment} alt='' />
					)}
					<p>Payment</p>
				</div>
			</div>
			<div className='left-nav__logo'>
				<img src={logo} alt='' />
			</div>
		</div>
	);
}

export default LeftNav;
