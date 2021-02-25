import React from 'react';
import './Item.css'
function Item({onClick}) {

    const productName = React.useRef(null);
    const price = React.useRef(null);

    const addItem = e => {
        e.preventDefault();

        const product = {
            name: productName.current.value,
            price: price.current.value,
            date: new Date(),
            rewards:  calculateRewards(price.current.value || 0)
        }

        if (product.name && product.price) {
            onClick(product);
        }
        calculateRewards(product.price);

        productName.current.value = null;
        price.current.value = null;
    }

    const calculateRewards = (price) => {
        let points  = 0;
        let remainder = price / 100; 
        if (remainder > 1) {
            let after100 = price % 100;
            if (after100 == 0) {
                after100 = (price - 100);
            }
            let credits = (price - (after100 + 50)) * 1;
            points = credits + after100 * 2;
                
        } else if(price > 50) {
            points = (price - 50) * 1;
        }
        return points;
    }

    return (
        <div className="item-container col-md-12">
            <form onSubmit={addItem}>
            <div className=" form-group col-md-6">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" className="form-control" placeholder="Product Name" id="product-name" ref={productName}></input>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="product-name">Price </label>
                <input type="text" className="form-control" placeholder="Price" id="product-price" ref={price} ></input>
            </div>
            <div className="form-button">
                <label htmlFor="submit-button"> &nbsp;</label>
                <button className="btn btn-primary" onClick={ addItem}> Add </button>
                </div>
            </form>
        </div>
    );
}

export default Item;