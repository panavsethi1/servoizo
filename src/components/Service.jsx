import React from 'react';
import LeftNav from './LeftNav';

function Service() {
	return (
		<div className='wrapper'>
			<div className='wrapper__left'>
				<LeftNav activeLink='service' />
			</div>
			<div className='wrapper__right'></div>
		</div>
	);
}

export default Service;
