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
			password:''
		}
	}

	handleChange=(event)=>{
		const {name, value}=event.target;
		this.setState({ [name]: value})
	}

	submitChange=async(event)=>{
		const { email, password}= this.state;
		event.preventDefault();
		await auth.signInWithEmailAndPassword(email, password);
		
		this.setState({
			email:'',
			password:''
		});
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
			<CustomButton type='submit' name='submit'> Sign in </CustomButton>
			<CustomButton type='submit' name='submit' isGoogle={true} onClick={ signInWithGoogle}> Sign in with Google </CustomButton>
			</div>
		</form>
		</div>

		)
}
}

export default SignIn;