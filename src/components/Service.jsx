import React, { useState } from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/common/search.svg';
import logout from '../assets/img/common/logout.svg';
import RightBar from './RightBar';
import hamburger from './../assets/img/common/hamburger-menu.svg';
import summaryChart from '../assets/img/service-summary-chart.png';
import summaryAppliances from '../assets/img/summary-appliances.png';

import { Tabs } from 'antd';
import Table from './table/Table';

const { TabPane } = Tabs;

function Service() {
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

	function handleTabChange() {}

	return (
		<div className='wrapper'>
			<div id='left-nav' className='wrapper__left'>
				<LeftNav activeLink='service' />
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
							<h2 className='heading-primary'>Service Details</h2>
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
							<div className='service'>
								<Tabs
									defaultActiveKey='1'
									onChange={handleTabChange}>
									<TabPane tab='Summary' key='1'>
										<div className='service__top'>
											<div className='service__top__tabs'>
												<div className='service__top__tabs__summary'>
													<div className='service__top__tabs__summary__total'>
														<h1>Total Booking</h1>
														<div className='service__top__tabs__summary__total__chart'>
															<img
																src={
																	summaryChart
																}
																alt=''
															/>
														</div>
													</div>
													<div className='service__top__tabs__summary__pending'>
														<h1>Pending Booking</h1>
														<div className='service__top__tabs__summary__pending__chart'>
															<img
																src={
																	summaryChart
																}
																alt=''
															/>
														</div>
													</div>
													<div className='service__top__tabs__summary__average'>
														<h1>Average Booking</h1>
														<div className='service__top__tabs__summary__average__chart'>
															<img
																src={
																	summaryChart
																}
																alt=''
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='service__bottom'>
												<h1>Appliances</h1>
												<div className='service__bottom__companies'>
													<img
														src={summaryAppliances}
														alt=''
													/>
												</div>
												<a href='/'>See full list ►</a>
											</div>
										</div>
									</TabPane>
									<TabPane tab='All Bookings' key='2'>
										<Table height='long' />
									</TabPane>
									<TabPane tab='3rd Party Vendor' key='3'>
										<Table height='long' />
									</TabPane>
								</Tabs>
							</div>
						</div>
						<RightBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Service;
