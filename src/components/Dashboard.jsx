import React from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/dashboard/search.svg';
import logout from '../assets/img/dashboard/logout.svg';

function Dashboard() {
	return (
		<div className='wrapper'>
			<div className='wrapper__left'>
				<LeftNav activeLink='dashboard' />
			</div>
			<div className='wrapper__right'>
				<div className='common'>
					<div className='common__logout'>
						<p>Logout</p>
						<img src={logout} alt='Logout' />
					</div>
					<div className='common__header'>
						<div className='common__header__text'>
							<h2 className='heading-primary'>Dashboard</h2>
							<p className='heading-primary--sub'>
								Everything here!
							</p>
						</div>
						<div className='common__header__search'>
							<img src={search} alt='' />
							<input type='text' placeholder='Search' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
