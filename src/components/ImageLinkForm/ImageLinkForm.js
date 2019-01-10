import React from 'react';
import 'tachyons';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
	return (
		<div>
			<p>This Magic Brain will detect faces in your picture. Give it a try.</p>
			<div className='center'>
				<div className='form center pa4 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' placeholder='enter your link here'/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;