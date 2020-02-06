import { firebase_db, takeCollectionSnapshotAndStoreData} from '../../firebase-config/firebaseConfig';

export const updateShopData=(shopDataObject)=>{

	return({
		type:'UPDATE_SHOP_DATA_FROM_DATABASE',
		payload:shopDataObject
	})
}

export const startLoadShopDataFromDatabase= ()=>{
	return({
		type:'START_LOADING'
	})
}

export const successLoadingOfShopDataFromDatabase=(shopData)=>{
	return({
		type:'LOADING_SUCCESSFUL',
		payload:shopData
	})
}

export const errorInLoadingShopData=(error)=>{
	return({
		type:'ERROR_IN_LOADING',
		payload:error
	})
}

export const startLoadingShopDataAsync=()=>{
	return( (dispatch)=>{
	dispatch(startLoadShopDataFromDatabase());

	const shopDataCollectionRef= firebase_db.collection('shopData');
	shopDataCollectionRef.onSnapshot( async (CollectionSnapshot)=>{

		const data=await takeCollectionSnapshotAndStoreData(CollectionSnapshot)

		Promise.all(data).then(shopDataObj => {
			let newShopData={};
			shopDataObj.forEach(item=>{
				newShopData[item.title.toLowerCase()]=item
			})

	dispatch(successLoadingOfShopDataFromDatabase(newShopData))
			}).catch(err=>{
				dispatch(errorInLoadingShopData(err))
			})
		})
	})
}