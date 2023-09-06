import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context.jsx";
import styles from "./Cart.module.css";
import CartItem from "./CartItem.jsx";

const Cart = ({ closeModalHandler, formatCurrency }) => {
  const { cart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, item) => {
      return acc + item.count * item.price;
    }, 0);
    setTotalAmount(totalAmount);
  }, [cart]);

  const CartList = () => {
    return (
      // <ul className={"cart-list"}>
      <ul className={styles["cart-list"]}>
        {cart.map(({ id, name, price, count }) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            price={price}
            count={count}
            formatCurrency={formatCurrency}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className={styles["cart-container"]}>
      <form className={styles["cart"]}>
        <CartList formatCurrency={formatCurrency} />

        <div className={styles["total"]}>
          <h3>Total Amount</h3>
          <span>{formatCurrency(totalAmount)}</span>
        </div>

        <div className={styles["actions"]}>
          <button onClick={closeModalHandler}>Close</button>
          {cart.length > 0 && <button>Order</button>}
        </div>
      </form>
    </div>
  );
};

export default Cart;
