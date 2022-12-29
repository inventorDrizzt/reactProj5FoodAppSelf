import React, { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import AuthContext from "../../context/cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(AuthContext);

  const orderCart = () => {
    console.log(`Ordering Cart with ${ctx.cartTotalQty}`);
  };

  return (
    <Modal closeModal={props.showCart}>
      <ul className={classes["cart-items"]}>
        {ctx.cartProducts.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.qty}
              onAdd={ctx.addToCart}
              onRemove={ctx.removeFromCart}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.cartTotalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.showCart} className={classes["button--alt"]}>
          close
        </button>
        <button onClick={orderCart} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
