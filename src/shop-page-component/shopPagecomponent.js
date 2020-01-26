import React from 'react';
import ShopOverviewComponent from './shop-overview-component/shopOverviewComponent';
import { Route} from 'react-router-dom';
import ShopItemComponent from './shop-item-component/shopItem.component';

class ShopPageComponent extends React.Component{

	constructor(props){
		super(props)
	}

	render(){

		return(
			<div className='category'>

				<Route exact={true} path={`${this.props.match.path}`} component={ShopOverviewComponent} />
				<Route path={`${this.props.match.path}/:category`} component={ShopItemComponent} />

			</div>

			)
	}
}



export default ShopPageComponent;