import React from 'react';
import ShopData from './shop-data';
import ShopItems from './shop-items-component/shopItems.component'

class ShopPageComponent extends React.Component{

	constructor(){
		super()
		this.state={
			shopData:ShopData
		}

	}

	render(){

		return(
			<div className='category'>
				{this.state.shopData.map(({id, ...remainingShopData})=>{
					return(
					<ShopItems key={id} {...remainingShopData}  />
					)})}
			</div>

			)
	}
}

export default ShopPageComponent;