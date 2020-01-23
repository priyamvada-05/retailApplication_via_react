import React from 'react';
import './customButton.component.scss';

const CustomButton=({children, isGoogle, ...otherprops})=>{

	return(
		<button className= {isGoogle? 'google-sign-in custom-button' : 'custom-button'} 
				{...otherprops}>
			{children}
		</button>
		)
}

export default CustomButton;
