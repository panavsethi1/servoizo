import React from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/common/search.svg';
import logout from '../assets/img/common/logout.svg';
import RightBar from './RightBar';

function Payment() {
	return (
		<div className='wrapper'>
			<div className='wrapper__left'>
				<LeftNav activeLink='payment' />
			</div>
			<div className='wrapper__right'>
				<div className='common'>
					<div className='common__logout'>
						<p>Logout</p>
						<img src={logout} alt='Logout' />
					</div>
					<div className='common__header'>
						<div className='common__header__text'>
							<h2 className='heading-primary'>Payment</h2>
							<p className='heading-primary--sub'>
								Everything here!
							</p>
						</div>
						<div className='common__header__search'>
							<img src={search} alt='' />
							<input type='text' placeholder='Search' />
						</div>
					</div>
					<div className='common__content'>
						<div className='common__content__main'></div>
						<RightBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
