import { createSelector} from 'reselect';

const shopState= (rootReducer)=> rootReducer.shop

export const shopStateData= createSelector(
	[shopState],
	(shop)=> shop.shopData
	)

export const getShopDataByCategory= (category)=> createSelector(
	[shopStateData],
	(shopData)=> {

		return (shopData[category])
		
	}
	)

export const getShopDataLoadingStatus= createSelector(
	[shopState],
	(shop)=> shop.loading
	)