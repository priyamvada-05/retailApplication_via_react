import React from 'react';
import './shopItem.component.scss';
import { connect} from 'react-redux';
import { getShopDataByCategory} from '../../redux/shop/shopSelector';
import ItemComponent from '../shop-overview-component/shop-items-preview-component/items-component/item.component';

const ShopItemComponent= ({ shopDataFromRedux, match})=>{
	
	const { title, items}= shopDataFromRedux;

	return(
		<div className='collection-page'>
			<h2 className='title'> {title}</h2>
			<div className='items'>
			{ items.map((data)=>
				<ItemComponent key={data.id} item={data} />
			)}
			</div>
		</div>

		)

}
const mapStateToProps= (rootReducer, propsFromRedux)=>{
	return({
		shopDataFromRedux: getShopDataByCategory(propsFromRedux.match.params.category)(rootReducer)
	})
}


export default connect(mapStateToProps)(ShopItemComponent)