import React from 'react';
import 'tachyons';

const Rank = (props) => {
	return (
		<div>
			<div className='white f3'>
				{`${props.name}, your current number of searches is...`}
			</div>
			<div className='white f1'>
				{`${props.rank}`}
			</div>
		</div>
	);
}

export default Rank;