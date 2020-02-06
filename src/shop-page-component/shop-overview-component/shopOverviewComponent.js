import React from 'react';
import ShopItemsPreviewComponent from './shop-items-preview-component/shopItemsPreview.component';
import { connect} from 'react-redux';
import { shopStateData} from '../../redux/shop/shopSelector';

const ShopOverviewComponent =(props)=>{
	console.log('data');
	console.log(props.shopDataFromRedux)
	const Array_shopDataFromRedux= props.shopDataFromRedux? 
		(Object.values(props.shopDataFromRedux))
		:null

	return(
			<div className='category'>
				{Array_shopDataFromRedux ?
					(Array_shopDataFromRedux.map(({id, ...remainingShopData})=>{
										return(
										<ShopItemsPreviewComponent key={id} {...remainingShopData}  />
										)}))
					:null}
			</div>

			)
}

const mapStateToProps= (rootReducer)=>{
	return({
		shopDataFromRedux:shopStateData(rootReducer)
	})
}

export default connect(mapStateToProps)(ShopOverviewComponent);