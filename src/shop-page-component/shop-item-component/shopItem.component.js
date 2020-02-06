import React from 'react';
import './shopItem.component.scss';
import { connect} from 'react-redux';
import { getShopDataByCategory} from '../../redux/shop/shopSelector';
import ItemComponent from '../shop-overview-component/shop-items-preview-component/items-component/item.component';

const ShopItemComponent= ({ shopDataFromRedux, match})=>{
	console.log('shop item')
	console.log(shopDataFromRedux)

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
const mapStateToProps= (rootReducer, propsFromComponent)=>{

	return({
		shopDataFromRedux: getShopDataByCategory(propsFromComponent.match.params.category)(rootReducer)
	})
}


export default connect(mapStateToProps)(ShopItemComponent)