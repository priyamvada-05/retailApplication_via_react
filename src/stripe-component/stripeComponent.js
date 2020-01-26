import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeComponent=({price})=>{
	const priceForStripe= price * 100;

	const onToken=(token)=>{
		console.log(token);
		alert('Payment is successful. Thankyou and shop again')
	}

	return(
		<StripeCheckout
			label='Pay Now'
			name='React retail application'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			currency="EUR"
			allowRememberMe
			description= {`Your total is ${price} euro`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey='pk_test_vHqC117bITkqtwsxw1CZ69RH001ZsgceRF'

		 />
		)
}

export default StripeComponent