import React, { useEffect, useState } from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/common/search.svg';
import logout from '../assets/img/common/logout.svg';
import RightBar from './RightBar';
import hamburger from './../assets/img/common/hamburger-menu.svg';
import graph from '../assets/img/dashboard-graph.png';
import pie from '../assets/img/dashboard-pie.png';
import Table from './table/Table';

function Dashboard() {
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
				<LeftNav activeLink='dashboard' />
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
					<div className='common__content'>
						<div className='common__content__main'>
							<div className='dashboard'>
								<div className='dashboard__top'>
									<div className='dashboard__top__sales'>
										<div className='dashboard__top__sales__header'>
											<div className='dashboard__top__sales__header__text'>
												<h1>Sales Report</h1>
												<div>
													<p>Showing for</p>
													<a href='/'>
														Aug 15 - Aug 29, 2021 ▼
													</a>
												</div>
											</div>
										</div>
										<div className='dashboard__top__sales__chart'>
											<img src={graph} alt='' />
										</div>
									</div>
									<div className='dashboard__top__total'>
										<div className='dashboard__top__total__header'>
											<h1>Total Consumers</h1>
										</div>
										<div className='dashboard__top__total__chart'>
											<img src={pie} alt='' />
										</div>
									</div>
								</div>
								<div className='dashboard__bottom'>
									<div className='dashboard__bottom__header'>
										<h1>New Customers</h1>
									</div>
									<div className='dashboard__bottom__table'>
										<Table />
									</div>
								</div>
							</div>
						</div>
						<RightBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
