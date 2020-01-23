import React from 'react';
import Item from './items-component/item.component';
import './shopItems.component.scss'

const ShopItemsComponent=({title, items})=>{

	return(
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
				<div className="container">
				  <div className="row">
			{items.filter((item, index)=> index < 4 ).map(({id, ...remainingItemProps})=>{
				return(
					<div className='col-md-3 col-lg-3'>
					<Item  key={id} {...remainingItemProps} />
					</div>
					)
			})}
		</div>
		</div>
		</div>

		)
}

export default ShopItemsComponent;