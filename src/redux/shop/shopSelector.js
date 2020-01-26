import { createSelector} from 'reselect';

const shopState= (rootReducer)=> rootReducer.shop

export const shopStateData= createSelector(
	[shopState],
	(shop)=> shop.shopData
	)

export const getShopDataByCategory= (category)=> createSelector(
	[shopStateData],
	(shopData)=> shopData[category]
	)