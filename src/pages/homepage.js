import React from 'react';
import HomePageComponent from '../home-page-component/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPageComponent from '../shop-page-component/shopPagecomponent';
import Header from '../header-component/header.component';
import SigninSignupComponent from '../sign-in-sign-up-component/sign-in-sign-up.component'
import './homepage.scss';
import { auth} from '../firebase-config/firebaseConfig';
import { createUserProfileDocument, createCollectionAndDocument} from '../firebase-config/firebaseConfig';
import { connect} from 'react-redux';
import { setCurrentUser} from '../redux/user/userAction';
import CheckoutComponent from '../checkout-component/checkoutComponent';
import AuthProtection from '../auth-protection-component/authProtection';
import firebase from '../firebase-config/firebaseConfig';


class HomePage extends React.Component{

	constructor(props){
		super(props);
	}


	componentDidMount(){


	}

	componentWillUnmount(){
		
	}

	render(){
		return(
			<div>
					<Header />
					<div className='new'>
					<Switch >
						<Route 
							exact={true} 
							path='/' 
							component={HomePageComponent}>
						</Route>

						<AuthProtection 
							path='/shops' 
							component={ShopPageComponent}>
						</AuthProtection>

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

						<AuthProtection 
							exact={true} 
							path='/checkout' 
							component={CheckoutComponent}>
						</AuthProtection>
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
		currentUser:rootRedux.user.currentUser,
		shopDataFromRedux: rootRedux.shop.shopData
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);