import React from 'react';
import { useHistory } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import useCart from './../../hooks/useCart';
import Cart from './../Cart/Cart';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const removeItem = key => {
        const newCart = cart.filter( product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    const history = useHistory()
    const handlePlaceOrder = () => {
        history.push("/placeOrder");
        setCart([])
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map( product =>
                        <ReviewItem 
                        product={product}
                        key={product.key}
                        removeItem={removeItem}
                        >
                        </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;