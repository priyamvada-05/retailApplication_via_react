import React from 'react';
import './customButton.component.scss';

const CustomButton=({children, isGoogle, isInverted, ...otherprops})=>{

	let classStyle='';
	if(isGoogle){
		classStyle= 'google-sign-in custom-button'
	}

	else if(isInverted){
		classStyle= 'inverted custom-button'
	}

	else{
		classStyle='custom-button'
	}
	return(
		<button className={classStyle} 	{...otherprops}>
			{children}
		</button>
		)
}

export default CustomButton;
