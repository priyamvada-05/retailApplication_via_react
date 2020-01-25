import { addUniqueItemToCart, removeItemSingleFromCart} from './cartUtil';

const INITIAL_STATE={
	hidden:true,
	cartItems:[]
}

const CartReducer= (state=INITIAL_STATE, action)=>{

	switch(action.type){
		case 'TOGGLE_CART_DROP_DWON':

			return({
				...state,
				hidden: !state.hidden
			})

		case 'ADD_ITEM_TO_CART':

			return({
				...state,
				cartItems:addUniqueItemToCart(state.cartItems, action.payload)
			})

		case 'REMOVE_ITEM_FROM_CART':

			return({
				...state,
				cartItems:state.cartItems.filter((item)=> item.id !== action.payload.id)
			})

		case 'REMOVE_SINGLE_ITEM':
			return({
				...state,
				cartItems:removeItemSingleFromCart(state.cartItems, action.payload)
			})


		default: 
			return state;
	}
}

export default CartReducer