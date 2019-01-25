import React from 'react';
import './FaceRecognition.css';
import 'tachyons';


const FaceRecognition = (props) => {
	return (
		<div className='center'>
			<div className='ma4 mt0 center' style={{position: 'absolute'}}>
				<img id='input-image' alt='' src={props.imageUrl} width='auto' height='500px'/>
				<div className='bounding-box' style={{top: props.box.top_row, right: props.box.right_col, bottom: props.box.bottom_row, left: props.box.left_col}}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;