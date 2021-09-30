import React from 'react';
import LeftNav from './LeftNav';

function Payment() {
	return (
		<div className='wrapper'>
			<div className='wrapper__left'>
				<LeftNav activeLink='payment' />
			</div>
			<div className='wrapper__right'></div>
		</div>
	);
}

export default Payment;
