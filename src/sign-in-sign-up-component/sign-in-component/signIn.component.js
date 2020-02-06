import React from 'react';
import FormInput from '../form-input-component/formInput.component'
import CustomButton from '../custom-button-component/customButton.component';
import './signIn.component.scss';
import { signInWithGoogle} from '../../firebase-config/firebaseConfig';
import { auth} from '../../firebase-config/firebaseConfig';
import { connect} from 'react-redux';
import { startSigninWithGoogle, startSigninWithEmailAndPassword} from '../../redux/user/userAction';

class SignIn extends React.Component{

	constructor(props){
		super(props)
		this.state={
			email:'',
			password:'',
			loading:false
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

		this.props.signInWithEmailAndPassword({ email, password});

		if(this.props.error){
		setTimeout(()=>{
					(this.setState({
						loading:false
					}))
				},1000)
		}
	}

	render(){

	return(
		<div className='sign-in'>
			<h2 className='title'> I already have an account</h2>
			<span> <strong>Sign in with your email and password</strong></span>
		<form onSubmit={this.submitChange}>
			<FormInput type='email' lable='email' value={this.state.email}  name='email' onChange={this.handleChange}  />
			<FormInput type='password' lable='password' value={this.state.password}  name='password' onChange={this.handleChange}  />
			<div className='buttons'>
			<CustomButton loading={this.state.loading} type='submit' name='submit'> Sign in </CustomButton>
			<CustomButton type='button' name='submit' isGoogle={true} onClick={ this.props.signInWithGoogle}> Sign in with Google </CustomButton>
			</div>
		</form>
		{
		(this.props.error)?
		<span className='error'> {this.props.error}</span>
		: null
		}
		</div>

		)
}
}

const mapDispatchToProps=(dispatch)=>{
	return({
		signInWithGoogle: ()=> dispatch(startSigninWithGoogle()),
		signInWithEmailAndPassword: ({ email, password})=> dispatch(startSigninWithEmailAndPassword({ email, password}))
	})
	
}

const mapStateToProps=(rootReducer)=>{
	return({
		error: rootReducer.user.error
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);