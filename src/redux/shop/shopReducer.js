const INITIAL_STATE={
	shopData: null,
	loading:true,
	error:null
}

const ShopReducer=(state=INITIAL_STATE, action)=>{

	switch(action.type){
		case 'UPDATE_SHOP_DATA_FROM_DATABASE':
			return {
        ...state,
        shopData:action.payload
      }

        case 'START_LOADING':
			return {
        ...state,
        loading:true
      }

      case 'LOADING_SUCCESSFUL':
      			return({
      				...state,
      				shopData: action.payload,
      				loading:false
      			})

      case 'ERROR_IN_LOADING':
      			return({
      				...state,
      				error:action.payload,
      				loading:false
      			})
		default: 
			return state
	}
}

export default ShopReducer