const INITIAL_STATE={
	currentUser:null,
	error:null
}

const UserReducer=(state = INITIAL_STATE, action)=>{

	switch(action.type){

		case 'UPDATE_CURRENT_USER': 
			return({
				...state,
				...action.payload,
			})

		case 'SIGN_OUT_CURRENT_USER': 
			return({
				...state,
				currentUser:null,
				error:null
			})

		case 'START_SIGN_IN_WITH_GOOGLE':
		case 'START_SIGN_IN_WITH_EMAIL_AND_PASSWORD': 
			return({
				...state
			})

		case 'SUCCESS_SIGN_IN_WITH_GOOGLE':
		case 'SUCCESS_SIGN_IN_WITH_EMAIL_AND_PASSWORD': 
			return({
				...state,
				currentUser: action.payload,
				error:null
			})

		case 'ERROR_SIGN_IN_WITH_GOOGLE':
		case 'ERROR_SIGN_IN_WITH_EMAIL_AND_PASSWORD': 
			return({
				...state,
				error: action.payload,
				currentUser:null
			})

		default: return state;
	}
}

export default UserReducer;