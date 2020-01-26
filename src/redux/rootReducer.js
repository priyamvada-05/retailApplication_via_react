import { combineReducers } from'redux';
import UserReducer from './user/userReducer';
import CartReducer from './cart/cartReducer';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ShopReducer from './shop/shopReducer';

const persistConfig={
	key:'root',
	storage:storage,
	whitelist:['cart','user']
}

const RootReducer = combineReducers({
	user: UserReducer,
	cart: CartReducer,
	shop: ShopReducer
});

export default persistReducer(persistConfig, RootReducer);
