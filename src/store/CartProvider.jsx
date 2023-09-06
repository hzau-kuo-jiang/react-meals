import React, { useReducer } from "react";
import CartContext from "./cart-context.jsx";

const initialCartState = {
  cart: [],
};

function updateCart(prevCart, id, changeCount) {
  if (
    changeCount === -1 &&
    prevCart.find((item) => item.id === id).count === 1
  ) {
    return prevCart.filter((item) => item.id !== id);
  } else {
    return prevCart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + changeCount,
        };
      }
      return item;
    });
  }
}

function pushToCart(prevCart, id, name, price, addCount) {
  return [
    ...prevCart,
    {
      id,
      name,
      count: addCount,
      price,
    },
  ];
}

const cartReducer = (state, action) => {
  if (action.type === "UPDATE") {
    const targetId = action.id;
    const changeCount = action.changeCount;
    return {
      cart: updateCart(state.cart, targetId, changeCount),
    };
  }

  if (action.type === "PUSH") {
    const targetId = action.id;
    const targetName = action.name;
    const targetPrice = action.price;
    const addCount = action.addCount;
    return {
      cart: pushToCart(state.cart, targetId, targetName, targetPrice, addCount),
    };
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState,
  );

  const updateCart = (id, changeCount) => {
    dispatchCartAction({ type: "UPDATE", id, changeCount });
  };

  const pushToCart = (id, name, price, addCount) => {
    dispatchCartAction({ type: "PUSH", id, name, price, addCount });
  };

  const cartContext = {
    cart: cartState.cart,
    updateCart,
    pushToCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
