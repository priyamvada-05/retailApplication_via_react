const INITIAL_STATE={
	currentUser:null
}

const UserReducer=(state = INITIAL_STATE, action)=>{

	switch(action.type){

		case 'UPDATE_CURRENT_USER': 
			return({
				...state,
				...action.payload
			})

		default: return state;
	}
}

export default UserReducer;