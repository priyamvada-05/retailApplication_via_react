import {createStore, applyMiddleware } from 'redux';
import RootReducer from './rootReducer';
import { persistStore} from 'redux-persist'
import logger from 'redux-logger';

const middleware=[logger];

export const store= createStore(RootReducer, applyMiddleware(...middleware));
export const persistor= persistStore(store)

export default {store, persistor};