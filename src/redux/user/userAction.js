export const setCurrentUser= (user)=>{

	return({
		type:'UPDATE_CURRENT_USER',
		payload:user
	})
}

export const signOutUser= ()=>{

	return({
		type:'SIGN_OUT_CURRENT_USER'
	})
}

export const startSigninWithGoogle= ()=>{

	return({
		type:'START_SIGN_IN_WITH_GOOGLE'
	})
}

export const successSigninWithGoogle= (user)=>{

	return({
		type:'SUCCESS_SIGN_IN_WITH_GOOGLE',
		payload:user
	})
}

export const errorSigninWithGoogle= (error)=>{

	return({
		type:'ERROR_SIGN_IN_WITH_GOOGLE',
		payload:error
	})
}

export const startSigninWithEmailAndPassword= (emailAndPassword)=>{

	return({
		type:'START_SIGN_IN_WITH_EMAIL_AND_PASSWORD',
		payload:emailAndPassword
	})
}

export const successSigninWithEmailAndPassword= (user)=>{

	return({
		type:'SUCCESS_SIGN_IN_WITH_EMAIL_AND_PASSWORD',
		payload:user
	})
}

export const errorSigninWithEmailAndPassword= (error)=>{

	return({
		type:'ERROR_SIGN_IN_WITH_EMAIL_AND_PASSWORD',
		payload:error
	})
}

