import React from 'react';
import './menu-item.component.scss';

const MenuItem=( {title, imageUrl, id, linkUrl, column_size})=>{


	const col=`col-sm-${column_size} col-lg-${column_size} col-md-${column_size} `

	return(<div className={col} >
			<div className='card'>
			<div className='background-img ' style={{
				backgroundImage : `url(${imageUrl})`

			}}>
		      <div className='content'>
		      	<h1 className='title'> {title.toUpperCase()} </h1>
		      	<span className='subtitle'> BUY</span>
		      </div>
		      </div>
		      </div>
		      </div>
		)

}
export default MenuItem;