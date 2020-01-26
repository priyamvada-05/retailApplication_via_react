import React from 'react';
import HomePageComponent from '../home-page-component/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPageComponent from '../shop-page-component/shopPagecomponent';
import Header from '../header-component/header.component';
import SigninSignupComponent from '../sign-in-sign-up-component/sign-in-sign-up.component'
import './homepage.scss';
import { auth} from '../firebase-config/firebaseConfig';
import { createUserProfileDocument} from '../firebase-config/firebaseConfig';
import { connect} from 'react-redux';
import { setCurrentUser} from '../redux/user/userAction';
import CheckoutComponent from '../checkout-component/checkoutComponent';
import AuthProtection from '../auth-protection-component/authProtection';


class HomePage extends React.Component{

	constructor(props){
		super(props)
		this.unsubscribeFromAuth=null;
	}


	componentDidMount(){
		this.unsubscribeFromAuth= auth.onAuthStateChanged(async (user)=>{
			if(user){
			const userRef=await createUserProfileDocument(user);
			userRef.onSnapshot( (snapshot)=>{
				console.log(snapshot.data());
				
				this.props.setCurrentUserToRedux({
					currentUser:{
						id:snapshot.id,
						...snapshot.data()
					}
				})
			})
		}
		else{
			this.props.setCurrentUserToRedux({ currentUser: null})
		}
		})

	}

	componentWillUnmount(){
		//this.unsubscribeFromAuth();
	}

	render(){
		return(
			<div>
					<Header />
					<div className='new'>
					<Switch >
						<Route exact={true} path='/' component={HomePageComponent}></Route>
						<AuthProtection path='/shops' component={ShopPageComponent}></AuthProtection>
						<Route 
							exact={true} 
							path='/sign-in' 
							render={ ()=>{
								return(
								this.props.currentUser?
									<Redirect to='/' /> :
									<SigninSignupComponent />)
							}}
						></Route>
						<AuthProtection exact={true} path='/checkout' component={CheckoutComponent}></AuthProtection>
					</Switch>
					</div>

			</div>
			)

	}

}

const mapDispatchToProps=(dispatch)=>{
	return({
		setCurrentUserToRedux: (user)=>dispatch(setCurrentUser(user))
	})
}

const mapStateToProps= (rootRedux)=>{
	return({
		currentUser:rootRedux.user.currentUser
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);