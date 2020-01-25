export const addUniqueItemToCart= (totalCartItems, addItem)=>{

	const existingItem=totalCartItems.find( cartItem => cartItem.id === addItem.id);

	if(existingItem){
			
		const newTotalCartItems= totalCartItems.map((cartItem)=>{
			if(cartItem.id === addItem.id){
				console.log('match')
				return({ ...cartItem, quantity: cartItem.quantity + 1})
			}
			else{
				console.log('not match')
				return cartItem
			}
		})

		return newTotalCartItems
	}

	else{
	return([...totalCartItems, {...addItem, quantity:1}])
	}	
}

export const removeItemSingleFromCart= (cartItems, removeItem)=>{

	if(removeItem.quantity>1){
		return cartItems.map((item)=>{
			let quantity= item.quantity -1;
			if(item.id === removeItem.id){
				return { ...item, quantity:quantity}
			}
			else{
				return item
			}
		})
	}

	else{
		return cartItems.filter((item)=> item.id !== removeItem.id)
	}
}