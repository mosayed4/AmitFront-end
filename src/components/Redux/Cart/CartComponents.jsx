import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../cartSlice";


const CartComponent = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <h1 className="h11">your Cart have (^^) </h1>
      {cartProducts.map((el) => (
        <div key={el.id} className="cart-product">
          <h1>{el.title}</h1>
          <img src={el.thumbnail} alt="" />
          <button
            onClick={(el) =>
              dispatch(cartSlice.actions.removeFromCart(el.id -1))}>Remove from Cart </button>
        </div>
      ))}
    </Fragment>
  );
};

export default CartComponent;
