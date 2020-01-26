import React from 'react';
import './item.component.scss';
import CustomButton from '../../../../sign-in-sign-up-component/custom-button-component/customButton.component';
import { connect} from 'react-redux';
import { addItemToCart} from '../../../../redux/cart/cartAction';

const Item = ({item, addItemToRedux})=>{
	
	const {name, imageUrl, price}=item;

	const handleClick=()=>{
		addItemToRedux(item);
	}

	return(
		<div className='collection-item'>
			<div className='image' style={{
				backgroundImage:`url(${imageUrl})`
			}}>
			</div>
			<div className='collection-footer'>
				<span className='name'>{name} </span>
				<span className='price'> &euro;{price} </span>
			</div>
			<CustomButton onClick={handleClick} isInverted={true}> Add to cart</CustomButton>
		</div>
		)
}

const mapDispatchToProps=(dispatch)=>{
	return({
		addItemToRedux: (item)=> dispatch(addItemToCart(item))
	})
}

export default connect(null,mapDispatchToProps)(Item)