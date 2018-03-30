import React from 'react'
import './Product.css'

const Product = (props) => {
    return (
    <div className="product"> 
        {console.log(props)}
        <img className="Product-img"src={props.url} />
        <div className="prouct-desc">
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
    </div>)
}

export default Product;