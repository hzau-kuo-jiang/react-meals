import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context.jsx";
import styles from "./Header.module.css";

const Header = ({ showModalHandler }) => {
  const [beBumped, setBeBumped] = useState(false);

  const { cart: prevCart } = useContext(CartContext);
  const totalNumber = prevCart.reduce((total, { count }) => total + count, 0);

  useEffect(() => {
    setBeBumped(true);
    const timer = setTimeout(() => {
      setBeBumped(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [prevCart]);

  return (
    <header className={styles.header}>
      <div>
        <h1>ReactMeals</h1>
        <div className={beBumped ? styles.bump : ""} onClick={showModalHandler}>
          <FontAwesomeIcon icon={faCartShopping} />
          <small>Your Cart</small>
          <span>{totalNumber}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
