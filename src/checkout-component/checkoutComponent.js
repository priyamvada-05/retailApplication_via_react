import React from 'react';
import './checkoutComponent.scss';
import { connect} from 'react-redux';
import { totalPriceInCart} from '../redux/cart/cartSelector';
import { cartItemSelector} from '../redux/cart/cartSelector';
import CheckOutItemComponent from './checkout-item-component/checkoutItemComponent';
import StripeComponent from '../stripe-component/stripeComponent';

const CheckoutComponent=(props)=>{

	return(
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span> Product </span>
				</div>
				<div className='header-block'>
					<span> Description </span>
				</div>
				<div className='header-block'>
					<span> Quantity </span>
				</div>
				<div className='header-block'>
					<span> Price </span>
				</div>
				<div className='header-block'>
					<span> Remove </span>
				</div>
			</div>
				{props.cartItemsFromRedux.map((item)=>
					<CheckOutItemComponent key={item.id} item={item} />
					)}

			<div className='total'>
				<span> TOTAL : &euro; {props.totalPriceInCartFromRedux}</span>
			</div>

			<div>
				Please insert some RANDOM CARD details for testing
				<br /> 
			</div>
			<StripeComponent price={props.totalPriceInCartFromRedux}/>
		</div>
		)
}

const mapStateToProps=(rootReducer)=>{
	return({
		cartItemsFromRedux: cartItemSelector(rootReducer),
		totalPriceInCartFromRedux: totalPriceInCart(rootReducer)
	})
}

export default connect(mapStateToProps)(CheckoutComponent);