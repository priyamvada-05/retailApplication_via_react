import { all, call} from 'redux-saga/effects';
import { listenToStartLoadingShopDataBySaga} from './shop/shopSaga';
import userSaga from './user/userSaga';

export default function* rootSaga(){
	yield all([call(listenToStartLoadingShopDataBySaga), call(userSaga)])
}