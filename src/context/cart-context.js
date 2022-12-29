import React from "react";

const CartContext = React.createContext({
    cart: new Map(),
    addToCart: () => {},
    removeFromCart: () => {},
    cartProducts: [],
    cartTotalQty: 0,
    cartTotalAmount: 0
});

export default CartContext;
