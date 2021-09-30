import React from 'react';
import LeftNav from './LeftNav';

function Devices() {
	return (
		<div className='wrapper'>
			<div className='wrapper__left'>
				<LeftNav activeLink='devices' />
			</div>
			<div className='wrapper__right'></div>
		</div>
	);
}

export default Devices;
