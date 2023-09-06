import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ showModalHandler, totalNumber, beBumped }) => {
  return (
    <header className={"header"}>
      <div>
        <h1>ReactMeals</h1>
        <div onClick={showModalHandler} className={beBumped ? "bump" : ""}>
          <FontAwesomeIcon icon={faCartShopping} />
          <small>Your Cart</small>
          <span>{totalNumber}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
