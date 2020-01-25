import { combineReducers } from'redux';
import UserReducer from './user/userReducer';
import CartReducer from './cart/cartReducer';

const RootReducer = combineReducers({
	user: UserReducer,
	cart: CartReducer
});

export default RootReducer;
