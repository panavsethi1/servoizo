import React, { useState } from 'react';
import LeftNav from './LeftNav';
import search from '../assets/img/common/search.svg';
import logout from '../assets/img/common/logout.svg';
import RightBar from './RightBar';
import hamburger from './../assets/img/common/hamburger-menu.svg';
import summaryAppliances from '../assets/img/summary-appliances.png';
import deviceChart from '../assets/img/devices-chart.png';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Devices() {
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
				<LeftNav activeLink='devices' />
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
							<h2 className='heading-primary'>Devices</h2>
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
							<div className='device'>
								<Tabs
									defaultActiveKey='1'
									onChange={handleTabChange}>
									<TabPane tab='Summary' key='1'>
										<div className='device__top'>
											<h1>Total Appliances</h1>
											<img src={deviceChart} alt='' />
										</div>
										<div className='device__bottom'>
											<h1>Appliances</h1>
											<div className='device__bottom__companies'>
												<img
													src={summaryAppliances}
													alt=''
												/>
											</div>
											<a href='/'>See full list ►</a>
										</div>
									</TabPane>
									<TabPane tab='All Bookings' key='2'>
										Content of Tab Pane 2
									</TabPane>
									<TabPane tab='3rd Party Vendor' key='3'>
										Content of Tab Pane 3
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

export default Devices;
