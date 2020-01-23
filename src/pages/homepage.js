import React from 'react';
import HomePageComponent from '../home-page-component/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPageComponent from '../shop-page-component/shopPagecomponent';
import Header from '../header-component/header.component';
import SigninSignupComponent from '../sign-in-sign-up-component/sign-in-sign-up.component'
import './homepage.scss';
import { auth} from '../firebase-config/firebaseConfig';
import { createUserProfileDocument} from '../firebase-config/firebaseConfig';


class HomePage extends React.Component{

	constructor(){
		super()
		this.state={
			currentUser:''
		}

		this.unsubscribeFromAuth=null;
	}


	componentDidMount(){
		this.unsubscribeFromAuth= auth.onAuthStateChanged(async (user)=>{
			if(user){
			const userRef=await createUserProfileDocument(user);
			userRef.onSnapshot( (snapshot)=>{
				console.log(snapshot.data());
				
				this.setState({
					currentUser:{
						id:snapshot.id,
						...snapshot.data()
					}
				})
			})
		}
		else{
			this.setState({ currentUser: null})
		}
		})

	}

	componentWillUnmount(){
		//this.unsubscribeFromAuth();
	}

	render(){
		return(
			<div>
					<Header currentUser={this.state.currentUser}/>
					<div className='new'>
					<Switch >
						<Route exact={true} path='/' component={HomePageComponent}></Route>
						<Route exact={true} path='/shops' component={ShopPageComponent}></Route>
						<Route exact={true} path='/sign-in' component={SigninSignupComponent}></Route>
					</Switch>
					</div>

			</div>
			)

	}

}

export default HomePage;