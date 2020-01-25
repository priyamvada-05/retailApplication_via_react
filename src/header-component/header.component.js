import React from 'react';
import './header.component.scss';
import { ReactComponent as Logo} from '../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth} from '../firebase-config/firebaseConfig';
import { connect} from 'react-redux';
import CartComponent from '../cart-component/cartComponent';
import CartDropDownComponent from '../cart-dropdown-component/cartDropDownCOmponent';


const Header= (props)=>{

	console.log('this is header');
	console.log(props)
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
					<div className='option' onClick={()=> auth.signOut()}>
						SIGN OUT
					</div>
					<CartComponent onClick={()=>{ 
						console.log('hi');
						props.toggleCartDropDownToRedux()}}/>
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



export default connect(mapStateToProps)(Header);