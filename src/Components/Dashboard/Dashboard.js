import React, {Component} from 'react';


//Component imports
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){

        const {inventoryList} = this.props;
        console.log(this.props);
        let inventory = inventoryList.map( (e, i) => {
            return <Product key={i} url={e.image_url} name={e.name} price={e.price}  />
        }
    )
        return (
        <div className="dashboard">
            {inventory}
    
        </div>
        )
    }
}
export default Dashboard