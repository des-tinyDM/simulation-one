import React, {Component} from 'react';
import './Form.css'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_name:'',
            url:'',
            price:'',
            inventoryList: {}
        }
        this.handleImage = this.handleImage.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleImage(e){
        this.setState({url:e.target.value})
    }
    handleName(event){
        this.setState({product_name:event.target.value})
    }
    handlePrice(event){
        this.setState({price:event.target.value})
    }
    submit(event){
        axios.post("/api/product", {name:this.state.product_name, image_url:this.state.url, price:this.state.price})
        .then(response => this.setState({inventoryList:response.data}) )
        .catch(console.log);
        

        // console.log(`from submit ${this.state}`);
        // alert("You've added a new item to inventory!")
    }
    render(){
        return (
        <div className="form">
            <form onSubmit={this.submit}>
                
                    <p>Image URL:</p>
                    <input type="text" value={this.state.value} onChange={this.handleImage}/>
                    
                    <p>Product Name:</p>
                    <input type="text" value={this.state.value} onChange={this.handleName}/>
                    
                    <p>Price: </p>
                    <input type="text" value={this.state.value} onChange={this.handlePrice}/>
                <div className="buttons">
                    <input className="reset btn" type="reset" value="Cancel"/>
                    <input className="submit btn"type="submit" value="Submit"/>
                </div>
            </form>
        </div>
        )
    }
}
export default Form