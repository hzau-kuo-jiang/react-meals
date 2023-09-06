import { useContext } from "react";
import CartContext from "../../../store/cart-context.jsx";

const MenuItemForm = ({ id, name, price }) => {
  const { cart: prevCart, updateCart, pushToCart } = useContext(CartContext);

  function submitMenuHandler(event, { id, name, price }) {
    event.preventDefault();
    const addCount = Number(event.target[0].value);
    prevCart.find((item) => item.id === id)
      ? updateCart(id, addCount)
      : pushToCart(id, name, price, addCount);
  }

  return (
    <form onSubmit={(event) => submitMenuHandler(event, { id, name, price })}>
      <label htmlFor={name}>
        Amount
        <input
          type="number"
          id={name}
          min={1}
          max={5}
          step={1}
          defaultValue={1}
          onCopy={(event) => event.preventDefault()}
        />
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MenuItemForm;
