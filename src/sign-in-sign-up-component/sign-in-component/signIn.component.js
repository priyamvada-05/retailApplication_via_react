import React from 'react';
import FormInput from '../form-input-component/formInput.component'
import CustomButton from '../custom-button-component/customButton.component';
import './signIn.component.scss';
import { signInWithGoogle} from '../../firebase-config/firebaseConfig';
import { auth} from '../../firebase-config/firebaseConfig';

class SignIn extends React.Component{

	constructor(){
		super()
		this.state={
			email:'',
			password:'',
			loading:false,
			error:null
		}
	}

	handleChange=(event)=>{
		const {name, value}=event.target;
		this.setState({ [name]: value})
	}

	submitChange=async(event)=>{
		const { email, password}= this.state;
		this.setState({loading: true})
		event.preventDefault();
		try{
		await auth.signInWithEmailAndPassword(email, password);
		}
		catch(error){
			console.log(error)
			this.setState({error: error,
						   loading:false,
						   email:'',
						   password:''})
		}
	}

	render(){

	return(
		<div className='sign-in'>
			<h2 className='title'> I already have an account</h2>
			<span> Sign in with your email and password</span>
		<form onSubmit={this.submitChange}>
			<FormInput type='email' lable='email' value={this.state.email}  name='email' onChange={this.handleChange}  />
			<FormInput type='password' lable='password' value={this.state.password}  name='password' onChange={this.handleChange}  />
			<div className='buttons'>
			<CustomButton loading={this.state.loading} type='submit' name='submit'> Sign in </CustomButton>
			<CustomButton type='submit' name='submit' isGoogle={true} onClick={ signInWithGoogle}> Sign in with Google </CustomButton>
			</div>
		</form>
		{
		(this.state.error)?
		<span className='error'> Email and Password is incorrect</span>
		: null
		}
		</div>

		)
}
}

export default SignIn;