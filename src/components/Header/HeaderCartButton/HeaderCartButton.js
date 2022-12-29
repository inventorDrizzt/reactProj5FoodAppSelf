import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";

import CartIcon from "../../UI/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  return (
    <button onClick={props.showCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      Your Cart
      <span className={classes.badge}>{ctx.cartTotalQty}</span>
    </button>
  );
};

export default HeaderCartButton;
