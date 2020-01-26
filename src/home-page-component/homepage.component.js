import React, {Component} from 'react';
import './homepage.component.scss';
import MenuItem from './menu-items-component/menu-item.component'
import { Link} from 'react-router-dom';

class HomePageComponent extends Component{

	constructor( props){

		super(props)
		console.log('this is home page')
		console.log(props);
		this.state={
			sections : [
					  {
					    title: 'hats',
					    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					    id: 1,
					    linkUrl: 'shops/hats',
					    column_size:4
					  },
					  {
					    title: 'jackets',
					    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					    id: 2,
					    linkUrl: 'shops/jackets',
					    column_size:4
					  },
					  {
					    title: 'sneakers',
					    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					    id: 3,
					    linkUrl: 'shops/sneakers',
						column_size:4
					  },
					  {
					    title: 'womens',
					    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					    id: 4,
					    linkUrl: 'shops/womens',
					    column_size:6
					  },
					  {
					    title: 'mens',
					    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					    id: 5,
					    linkUrl: 'shops/mens',
					    column_size:6
					  }
				]

		}
	}

	render(){

		return(
			
				<div className="container">
				  <div className="row new">
				   	{this.state.sections.map(({ title, imageUrl, id, linkUrl, column_size})=>{
				   		return(
				   			<div key={id} className={`col-md-${column_size} col-lg-${column_size}`}>
				   			<Link to={linkUrl}>
					   		<MenuItem key={id} 
					   				  title={title} 
					   				  imageUrl={imageUrl} 
					   				  linkUrl={linkUrl}
					   				  history={this.props.history}
					   				  match={this.props.match} 
					   				  />
					   		</Link>
					   		</div>
				   				)
				   	})}

				  </div>
				</div>

			)
	}
}

export default HomePageComponent;