import React from 'react';
import LeftNav from './LeftNav';

function Customer() {
	return (
		<div className='wrapper'>
			<div className='wrapper__left'>
				<LeftNav activeLink='customer' />
			</div>
			<div className='wrapper__right'></div>
		</div>
	);
}

export default Customer;
