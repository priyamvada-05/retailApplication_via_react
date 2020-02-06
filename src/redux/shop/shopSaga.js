import { takeEvery, call, put} from 'redux-saga/effects';
import { firebase_db, takeCollectionSnapshotAndStoreData} from '../../firebase-config/firebaseConfig';
import { startLoadShopDataFromDatabase, successLoadingOfShopDataFromDatabase, errorInLoadingShopData} from './shopAction';

export function* listenToStartLoadingShopDataBySaga(){
	yield takeEvery('START_LOADING', StartLoadingShopDataAsync)
}


export function* StartLoadingShopDataAsync(){

		try{
		const shopDataCollectionRef= firebase_db.collection('shopData');
	    const CollectionSnapshot = yield shopDataCollectionRef.get()

		const data=yield call(takeCollectionSnapshotAndStoreData, CollectionSnapshot)
		const shopDataObj= yield Promise.all(data)
		let newShopData={};
		shopDataObj.forEach(item=>{
				newShopData[item.title.toLowerCase()]=item
			})

		yield put(successLoadingOfShopDataFromDatabase(newShopData))
	}
	catch(err){
		yield put(errorInLoadingShopData(err))
	}

}