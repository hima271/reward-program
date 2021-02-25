import Item from '../Item'
import React, { useState } from 'react';
import './Cart.css'

function Cart() {
   
    let data = localStorage.getItem('products');
    if (data) {
        data = JSON.parse(data)
    } else {
        data = [];
    }
     const [products, setProducts] = useState(data);

    const handleChange = (product) => {
        setProducts(products => [...products, product]);
        localStorage.setItem('products', JSON.stringify(products));
    }


    return (
        <div className="container">
             <Item onClick={handleChange}></Item>
            < div className = "col-md-12 head" > < div className = "col-md-3" >Product </div> <div className = "col-md-3" >Price</div > < div className = "col-md-3" > Rewards Earned</div></div >
            <div className="col-md-12 items">{products.map((prod, index) => <div key={ index } id={index} className="col-md-12"><div className="col-md-3">{prod.name}</div><div className="col-md-3">{prod.price}</div><div className="col-md-3">{prod.rewards}</div> 
            </div>)}</div>
        </div>
    )
}

export default Cart;
