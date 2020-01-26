import React from 'react';
import './menu-item.component.scss';

const MenuItem=( {title, imageUrl, id, linkUrl, match, history})=>{


	return(
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
		)

}
export default MenuItem;