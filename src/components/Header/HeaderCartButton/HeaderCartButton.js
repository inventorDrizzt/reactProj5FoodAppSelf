import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../../context/cart-context";

import CartIcon from "../../UI/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [bump, setBump] = useState(false);
  const ctx = useContext(CartContext);

  useEffect(() => {
    setBump(true);
    setTimeout(() => {
      setBump(false)
    }, 400);
  }, [ctx.cartTotalQty]);

  return (
    <button
      onClick={props.showCart}
      className={`${classes.button} ${bump ? classes.bump : ""}`}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      Your Cart
      <span className={classes.badge}>{ctx.cartTotalQty}</span>
    </button>
  );
};

export default HeaderCartButton;
