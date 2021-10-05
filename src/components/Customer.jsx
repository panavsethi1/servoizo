import React, { useState } from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/common/search.svg';
import logout from '../assets/img/common/logout.svg';
import RightBar from './RightBar';
import hamburger from './../assets/img/common/hamburger-menu.svg';

function Customer() {
	const [isOpen, setIsOpen] = useState(false);

	function handleHamburger() {
		if (isOpen) {
			document.getElementById('left-nav').style.width = '300px';
			document.getElementById('hamburger').style.marginLeft = '270px';
			document.getElementById('left-nav-content').style.visibility =
				'initial';
		} else {
			document.getElementById('left-nav').style.width = '0';
			document.getElementById('hamburger').style.marginLeft = '0';
			document.getElementById('left-nav-content').style.visibility =
				'hidden';
		}
	}

	return (
		<div className='wrapper'>
			<div id='left-nav' className='wrapper__left'>
				<LeftNav activeLink='customer' />
			</div>
			<div className='wrapper__right'>
				<div className='common'>
					<div id='hamburger' className='common__hamburger'>
						<img
							onClick={() => {
								setIsOpen(!isOpen);
								handleHamburger();
							}}
							src={hamburger}
							alt=''
						/>
					</div>
					<div className='common__logout'>
						<p>Logout</p>
						<img src={logout} alt='Logout' />
					</div>
					<div className='common__header'>
						<div className='common__header__text'>
							<h2 className='heading-primary'>Customer</h2>
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

export default Customer;
