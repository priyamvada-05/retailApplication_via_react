export const setCurrentUser= (user)=>{

	return({
		type:'UPDATE_CURRENT_USER',
		payload:user
	})
}