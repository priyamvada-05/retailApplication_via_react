import React from 'react';
import ShopItemsPreviewComponent from './shop-items-preview-component/shopItemsPreview.component';
import { connect} from 'react-redux';
import { shopStateData} from '../../redux/shop/shopSelector';

const ShopOverviewComponent =(props)=>{

	const Array_shopDataFromRedux=Object.values(props.shopDataFromRedux)

	return(
			<div className='category'>
				{Array_shopDataFromRedux.map(({id, ...remainingShopData})=>{
					return(
					<ShopItemsPreviewComponent key={id} {...remainingShopData}  />
					)})}
			</div>

			)
}

const mapStateToProps= (rootReducer)=>{
	return({
		shopDataFromRedux:shopStateData(rootReducer)
	})
}

export default connect(mapStateToProps)(ShopOverviewComponent);