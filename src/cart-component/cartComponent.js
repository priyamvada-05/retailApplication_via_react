import React from 'react';
import { ReactComponent as ShoppingCartComponent} from '../assets/shopping-bag.svg';
import './cartComponent.scss';
import { connect} from 'react-redux';
import { toggleCartDropDown} from '../redux/cart/cartAction';
import { cartItemCountSelector} from '../redux/cart/cartSelector';

const CartComponent= (props)=>{

	return(
		<div className='cart-icon' onClick={props.toggleCartDropDownToRedux}>
			<ShoppingCartComponent className='shopping-icon' />
			<span className='item-count'> {props.cartItemCount}</span>
		</div>

		)
}

const mapDispatchToProps=(dispatch)=>{
	return({
		toggleCartDropDownToRedux: ()=> dispatch(toggleCartDropDown())
	})
}

const mapStateToProps=(rootReducer)=>{
	return({
		cartItemCount:cartItemCountSelector(rootReducer)
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);