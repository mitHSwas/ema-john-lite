import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product;
    const {removeItem} = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <button onClick={ () => removeItem(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;