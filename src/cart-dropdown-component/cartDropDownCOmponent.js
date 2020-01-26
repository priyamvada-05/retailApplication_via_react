import React from 'react';
import CustomButton from '../sign-in-sign-up-component/custom-button-component/customButton.component';
import './cartDropDownCOmponent.scss';
import { connect} from 'react-redux';
import { cartItemSelector} from '../redux/cart/cartSelector';
import CartItemComponent from './cart-item-component/cartItem.component';
import { withRouter} from 'react-router-dom';
import { toggleCartDropDown} from '../redux/cart/cartAction';

const CartDropDownComponent= (props)=>{

	const handleClick=()=>{
		 props.history.push('/checkout');
		 props.toggleHiddenToRedux();

	}

	return(
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{ props.cartItems.length?
				(props.cartItems.map((item)=>
									<CartItemComponent key={item.id} item={item} />
								)
				):
				<span className='empty'> Your cart is empty</span>
			}
			</div>
			<div className='button'>
			<CustomButton onClick={handleClick}> GO TO CART</CustomButton>
			</div>
		</div>
		)
}

const mapStateToProps= (rootReducer)=>{
	return({
		cartItems:cartItemSelector(rootReducer)
	})
}

const mapDispatchToProps= (dispatch)=>{
	return({
		toggleHiddenToRedux: ()=> dispatch(toggleCartDropDown())
	})
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDownComponent));