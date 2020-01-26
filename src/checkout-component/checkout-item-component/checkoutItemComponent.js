import React from 'react';
import './checkoutItemComponent.scss';
import { connect} from 'react-redux';
import { addItemToCart, removeItemFromCart, removeSingleItem} from '../../redux/cart/cartAction';

const CheckOutItemComponent = ({item, addItemToCartByRedux, removeItemFromCartByRedux, removeSingleItemByRedux})=>{

	const {name, quantity, price, imageUrl}=item
	return(
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='img' />
			</div>

			<span className='name'> {name}</span>
			<span className='quantity'> 
				<div className='arrow' onClick={()=> removeSingleItemByRedux(item)}> &#10094;</div>
				<span className='value'> {quantity}</span>
				<div className='arrow' onClick={()=> addItemToCartByRedux(item)}> &#10095; </div>
			</span>
			<span className='price'> &euro; {price}</span>
			<div className='remove-button' onClick={()=> removeItemFromCartByRedux(item)}> &#10005; </div>
		</div>
		)
}

const mapDispatchToProps= (dispatch)=>{
	return({
		addItemToCartByRedux: (item)=> dispatch(addItemToCart(item)),
		removeItemFromCartByRedux: (item)=> dispatch(removeItemFromCart(item)),
		removeSingleItemByRedux: (item)=> dispatch(removeSingleItem(item))
	})
}

export default connect(null, mapDispatchToProps)(CheckOutItemComponent)