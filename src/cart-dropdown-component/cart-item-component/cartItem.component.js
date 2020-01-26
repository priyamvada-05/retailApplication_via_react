import React from 'react';
import './cartItem.component.scss';

const CartItemComponent = ({item:{name, imageUrl, price, quantity}})=>{

	return(
		<div className='cart-item'>
			<img src={imageUrl} />
			<div className='item-detail'>
				<span className='name'>{name}</span>
				<span className='price'>{quantity} * &euro; {price}</span>
			</div>
		</div>

		)
}

export default CartItemComponent;
