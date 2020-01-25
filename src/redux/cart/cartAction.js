export const toggleCartDropDown=()=>{

	return({
		type:'TOGGLE_CART_DROP_DWON'
	})
}

export const addItemToCart=(item)=>{
	return({
		type:'ADD_ITEM_TO_CART',
		payload: item
	})
}

export const removeItemFromCart=((item)=>{
	return({
		type:'REMOVE_ITEM_FROM_CART',
		payload:item
	})
})

export const removeSingleItem=((item)=>{
	return({
		type: 'REMOVE_SINGLE_ITEM',
		payload: item
	})
})