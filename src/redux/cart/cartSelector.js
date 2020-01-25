import { createSelector} from 'reselect';

const cartSelector= (rootReducer)=> rootReducer.cart;

export const cartItemSelector= createSelector(
	[cartSelector],
	(cart)=> cart.cartItems
	)

export const cartItemCountSelector= createSelector(
	[cartItemSelector],
	(cartItems)=> cartItems.reduce((acc, item)=> acc+ item.quantity , 0)
	)

export const totalPriceInCart=createSelector(
	[cartItemSelector],
	(cartItems)=> cartItems.reduce((acc,item)=> acc + (item.quantity * item.price), 0)
	)

	
