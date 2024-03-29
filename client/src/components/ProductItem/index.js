import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { pluralize } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function ProductItem(item) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };
  const { image, name, _id, price, quantity } = item;

  return (
    <div className="product-container height px-1 py-1">
      <Link to={`/products/${_id}`} className='white-text'>
        <img alt={name} src={`/images/${image}`} />
        <p className='white-text'>{name}</p>
      </Link>
      <div className="item-contents">
        <div >
          <div>
            {quantity} {pluralize('item', quantity)} in stock
          </div>
          <span>${price}</span>
        </div>
        <button className='add-to-cart' onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;