import React from 'react';
import ShopOverviewComponent from './shop-overview-component/shopOverviewComponent';
import { Route} from 'react-router-dom';
import ShopItemComponent from './shop-item-component/shopItem.component';
import { connect} from 'react-redux';
import { updateShopData, startLoadingShopDataAsync, startLoadShopDataFromDatabase} from '../redux/shop/shopAction';
import LoadingComponent from '../loading-page-component/loadingComponent';
import { getShopDataLoadingStatus} from '../redux/shop/shopSelector';


class ShopPageComponent extends React.Component{

	constructor(props){
		super(props);
		console.log('shop page constructor')
		const loading=this.props.loadingStateFromRedux;
	}
	componentDidMount(){
		console.log('shop page component')
		this.props.startLoadingAsync();

}
	componentWillUnmount(){
		
	}

	render(){

		return(
			<div className='category'>

				<Route 
					exact={true}
					path={`${this.props.match.path}`} 
					render={(props)=> LoadingComponent(ShopOverviewComponent)(this.props.loadingStateFromRedux, props) } />
				<Route 
					path={`${this.props.match.path}/:category`} 
					render={(props)=> LoadingComponent(ShopItemComponent)(this.props.loadingStateFromRedux, props)} />

			</div>

			)
	}
}

const mapDispatchToProps= (dispatch)=>{
	return({
		updateShopDataToRedux: (shopDataObj)=> dispatch(updateShopData(shopDataObj)),
		//for redux-thunk --> startLoadingAsync: ()=>dispatch(startLoadingShopDataAsync())
		startLoadingAsync: ()=>dispatch(startLoadShopDataFromDatabase())
	})
}

const mapStateToProps=(rootReducer)=>{
	return({
		loadingStateFromRedux: getShopDataLoadingStatus(rootReducer)
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageComponent);