import React from 'react';
import 'tachyons';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonClick}) => {
	return (
		<div>
			<p>This Magic Brain will detect faces in your picture. Give it a try.</p>
			<div className='center'>
				<div className='form center pa4 shadow-5'>
					<input 
						className='f4 pa2 w-70 center' 
						type='text' 
						placeholder='enter your link here' 
						onChange={onInputChange}
					/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonClick}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;