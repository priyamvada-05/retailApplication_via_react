import React from 'react';
import Item from './items-component/item.component';
import './shopItemsPreview.component.scss'

const ShopItemsPreviewComponent=({title, items})=>{

	return(
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
				<div className="container">
				  <div className="row">
			{items.filter((item, index)=> index < 4 ).map((item)=>{
				return(
					<div key={item.id} className='col-md-3 col-lg-3'>
					<Item  key={item.id} item={item} />
					</div>
					)
			})}
		</div>
		</div>
		</div>

		)
}

export default ShopItemsPreviewComponent;