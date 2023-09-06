import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({
  id,
  name,
  price,
  count,
  addOneHandler,
  minusOneHandler,
  formatCurrency,
}) => {
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
