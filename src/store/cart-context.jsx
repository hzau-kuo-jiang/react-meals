import React from "react";

const CartContext = React.createContext({
  cart: [],
  updateCart: (id, changeCount) => {},
  pushToCart: (id, name, price, addCount) => {},
});

export default CartContext;
