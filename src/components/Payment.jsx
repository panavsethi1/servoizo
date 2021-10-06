import React, { useState } from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/common/search.svg';
import logout from '../assets/img/common/logout.svg';
import RightBar from './RightBar';
import hamburger from './../assets/img/common/hamburger-menu.svg';
import chart from './../assets/img/payment-chart.png';
import graph from './../assets/img/payment-graph.png';

import { Tabs } from 'antd';
import Table from '../components/table/Table';

const { TabPane } = Tabs;

function handleTabChange() {}

function Payment() {
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
				<LeftNav activeLink='payment' />
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
							<h2 className='heading-primary'>Payment Details</h2>
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
							<div className='payment'>
								<div className='payment__tabs'>
									<Tabs
										defaultActiveKey='1'
										onChange={handleTabChange}>
										<TabPane tab='Summary' key='1'>
											<div className='payment__tabs__summary'>
												<div className='payment__tabs__summary__sales'>
													<h1>Sales Report</h1>
													<div className='payment__tabs__summary__sales__charts'>
														<div className='payment__tabs__summary__sales__charts__item'>
															<img
																src={chart}
																alt=''
															/>
														</div>
														<div className='payment__tabs__summary__sales__charts__item'>
															<img
																src={chart}
																alt=''
															/>
														</div>
														<div className='payment__tabs__summary__sales__charts__item'>
															<img
																src={chart}
																alt=''
															/>
														</div>
													</div>
												</div>
												<div className='payment__tabs__summary__country'>
													<h1>
														Countrywise Sales Report
													</h1>
													<div className='payment__tabs__summary__country__charts'>
														<div className='payment__tabs__summary__country__charts__item'>
															<img
																src={graph}
																alt=''
															/>
														</div>
														<div className='payment__tabs__summary__country__charts__item'>
															<img
																src={graph}
																alt=''
															/>
														</div>
														<div className='payment__tabs__summary__country__charts__item'>
															<img
																src={graph}
																alt=''
															/>
														</div>
													</div>
												</div>
											</div>
										</TabPane>
										<TabPane tab='All Invoices' key='2'>
											<Table height='long' />
										</TabPane>
									</Tabs>
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

export default Payment;
