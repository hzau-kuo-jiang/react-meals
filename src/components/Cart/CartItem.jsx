import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartContext from "../../store/cart-context.jsx";

const CartItem = ({ id, name, price, count, formatCurrency }) => {
  const { updateCart } = useContext(CartContext);

  function addOneHandler(event, id) {
    event.preventDefault();
    updateCart(id, 1);
  }

  function minusOneHandler(event, id) {
    event.preventDefault();
    updateCart(id, -1);
  }

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>
          <small>{formatCurrency(price)}</small>
          <span>x {count}</span>
        </div>
      </div>
      <div>
        <button onClick={(event) => minusOneHandler(event, id)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button onClick={(event) => addOneHandler(event, id)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
