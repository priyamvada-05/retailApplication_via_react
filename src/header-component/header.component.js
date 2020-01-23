import React from 'react';
import './header.component.scss';
import { ReactComponent as Logo} from '../assets/crown.svg';
import {Link} from 'react-router-dom';
import { auth} from '../firebase-config/firebaseConfig';

const Header= ({currentUser})=>{

	return(
		<div className='header'>
			<Link className='Logo-container' to='/'>
				<Logo />
			</Link>
			<div className='options'>
			<Link className='option' to='/shops'> SHOP </Link>
			<Link className='option' to='/contacts'> CONTACT </Link>
			{
				currentUser ? 
				(
					<div className='option' onClick={()=> auth.signOut()}>
						SIGN OUT
					</div>
				) : 
				<Link className='option' to='/sign-in'> SIGN IN </Link>

			}
			</div>
		</div>

		)
}

export default Header;