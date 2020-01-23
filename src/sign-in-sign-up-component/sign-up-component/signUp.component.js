import React from 'react';
import { auth, createUserProfileDocument} from '../../firebase-config/firebaseConfig';
import FormInput from '../form-input-component/formInput.component';
import CustomButton from '../custom-button-component/customButton.component';
import './signUp.component.scss';

class SignUp extends React.Component{

	constructor(){
		super()
		this.state={
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		}
	}

	handleChange=(event)=>{
		const {name, value}= event.target;
		this.setState({ [name] : value })
	}

	handleSubmit=async (event)=>{
		const { email, password, confirmPassword, displayName}= this.state;

		if(password !== confirmPassword){
			alert('Password is not same')
			return
		}
		event.preventDefault();
		try{
		const { user}= await auth.createUserWithEmailAndPassword(email, password);
		await createUserProfileDocument(user, {displayName});
		}
		catch(error){
			console.log(error);
		}
		this.setState({
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		})
	}

	render(){

		return(
			<div className='sign-up'>
				<h2 className='title'> I don't have an account</h2>
				<span> Sign up with email and password</span>
				<form onSubmit={this.handleSubmit}>

					<FormInput type='text' lable='name' value={this.state.displayName} name='displayName' onChange={this.handleChange} />
					<FormInput type='text' lable='email' value={this.state.email} name='email' onChange={this.handleChange} />
					<FormInput type='password' lable='password' value={this.state.password} name='password' onChange={this.handleChange} />
					<FormInput type='password' lable='confirm password' value={this.state.confirmPassword} name='confirmPassword' onChange={this.handleChange} />
					<CustomButton type='submit' name='submit'> Sign in </CustomButton>
				</form>
			</div>
			)
	}
}

export default SignUp;
