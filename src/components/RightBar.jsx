import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import customer from '../assets/img/common/right/customers.svg';
import bookings from '../assets/img/common/right/bookings.svg';
import device from '../assets/img/common/right/device.svg';
import map from '../assets/img/common/right/map.png';

function RightBar() {
	const [days, setDays] = useState({ value: 30, label: 'last 30 days' });

	const daysOptions = [
		{ value: 30, label: 'last 30 days' },
		{ value: 90, label: 'last 3 months' },
		{ value: 180, label: 'last 6 months' },
	];

	return (
		<div className='common__content__right'>
			<div className='common__content__right__header'>
				<p>Statistics</p>
				<Select
					className='common__content__right__header__select'
					options={daysOptions}
					onChange={(e) => setDays(e)}
					value={days}
				/>
			</div>
			<div className='common__content__right__data'>
				<div className='common__content__right__data__item common__content__right__data__item--blue'>
					<div className='common__content__right__data__item__image'>
						<img src={bookings} alt='Bookings'></img>
					</div>
					<div className='common__content__right__data__item__text'>
						<p>Bookings</p>
						<h1>
							356<span> &uarr; 12.5%</span>
						</h1>
					</div>
				</div>
				<div className='common__content__right__data__item common__content__right__data__item--violet'>
					<div className='common__content__right__data__item__image'>
						<img src={customer} alt='Customers'></img>
					</div>
					<div className='common__content__right__data__item__text'>
						<p>Customers</p>
						<h1>
							128<span> &uarr; 12.5%</span>
						</h1>
					</div>
				</div>
				<div className='common__content__right__data__item common__content__right__data__item--green'>
					<div className='common__content__right__data__item__image'>
						<img src={device} alt='Devices'></img>
					</div>
					<div className='common__content__right__data__item__text'>
						<p>Devices</p>
						<h1>
							76<span className='down'> &darr; 12.5%</span>
						</h1>
					</div>
				</div>
			</div>
			<div className='common__content__right__map'>
				<h1>Top Countries</h1>
				<div className='common__content__right__map__image'>
					<img src={map} alt='Map' />
				</div>
				<p>We only started collecting regional data from August 2021</p>
			</div>
		</div>
	);
}

export default RightBar;
