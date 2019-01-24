import React from 'react';
import 'tachyons';


const FaceRecognition = (props) => {
	return (
		<div className='ma4 mt0'>
			<img alt='' src={props.imageUrl} width='500px' height='auto'/>
		</div>
	);
}

export default FaceRecognition;