import React from 'react';
import './header.component.scss';
import { ReactComponent as Logo} from '../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth} from '../firebase-config/firebaseConfig';
import { connect} from 'react-redux';
import CartComponent from '../cart-component/cartComponent';
import CartDropDownComponent from '../cart-dropdown-component/cartDropDownCOmponent';
import { signOutUser} from '../redux/user/userAction';


const Header= (props)=>{

const handleSignOut=()=>{
	auth.signOut();
	props.signOutByRedux();
}

	return(
		<div className='header'>
			<Link className='Logo-container' to='/'>
				<Logo />
			</Link>
			<div className='options'>
			<Link className='option' to='/shops'> SHOP </Link>
			<Link className='option' to='/contacts'> CONTACT </Link>
			{
				props.currentUser ? 
				(
					<div className='new option'>
					<div className='option' onClick={handleSignOut}>
						SIGN OUT
					</div>
					<CartComponent />
					</div>
				) : 
				<Link className='option' to='/sign-in'> SIGN IN </Link>

			}

			</div>
			{ 
				props.toggle?
					null:
					<CartDropDownComponent />
			}
			
		</div>

		)
}

const mapStateToProps=(rootReducer)=>{
	return({
		currentUser:rootReducer.user.currentUser,
		toggle:rootReducer.cart.hidden
	})
}

const mapDispatchToProps=(dispatch)=>{
	return({
		signOutByRedux: ()=>dispatch(signOutUser())
	})
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);