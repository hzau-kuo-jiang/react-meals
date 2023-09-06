import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement.jsx";
import HeroImage from "./components/HeroImage/HeroImage.jsx";

function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amountInMenu: 1,
      amountInCart: 0,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      amountInMenu: 1,
      amountInCart: 0,
    },
    {
      id: 3,
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      amountInMenu: 1,
      amountInCart: 0,
    },
    {
      id: 4,
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      amountInMenu: 1,
      amountInCart: 0,
    },
  ]);

  const availableMeals = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: 3,
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: 4,
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  const quickCloseModalHandler = (event) => {
    if (event.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  const changeMountInMenuHandler = (event, id) => {
    event.preventDefault();
    const changedAmount = Number(event.target.value);
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amountInMenu: changedAmount,
          };
        }
        return item;
      });
    });
  };

  const submitMenuHandler = (event, id) => {
    event.preventDefault();
    const addedAmount = Number(event.target[0].value);
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amountInCart: item.amountInCart + addedAmount,
          };
        }
        return item;
      });
    });
  };

  const addAmountHandler = (event, id) => {
    event.preventDefault();
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amountInCart: item.amountInCart + 1,
          };
        }
        return item;
      });
    });
  };

  const minusAmountHandler = (event, id) => {
    event.preventDefault();
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amountInCart: item.amountInCart - 1,
          };
        }
        return item;
      });
    });
  };

  const totalNumber = menu.reduce((acc, item) => {
    return acc + item.amountInCart;
  }, 0);

  const totalAmount = menu.reduce((acc, item) => {
    return acc + item.amountInCart * item.price;
  }, 0);

  function formatCurrency(amount) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <>
      <header className={"header"}>
        <div>
          <h1>ReactMeals</h1>
          <div onClick={showModalHandler}>
            <FontAwesomeIcon icon={faCartShopping} />
            <small>Your Cart</small>
            <span>{totalNumber}</span>
          </div>
        </div>
      </header>
      <HeroImage />
      <main>
        <Advertisement />
        <ul className={"menu"}>
          {menu.map(
            ({ id, name, description, price, amountInMenu, amountInCart }) => (
              <li key={id}>
                <div>
                  <h3>{name}</h3>
                  <i>{description}</i>
                  <span>{formatCurrency(price)}</span>
                </div>
                <form onSubmit={(event) => submitMenuHandler(event, id)}>
                  <label htmlFor={name}>
                    Amount
                    <input
                      type="number"
                      id={name}
                      min={1}
                      step={1}
                      value={amountInMenu}
                      onChange={(event) => changeMountInMenuHandler(event, id)}
                    />
                  </label>
                  <button type="submit">+ Add</button>
                </form>
              </li>
            ),
          )}
        </ul>
      </main>
      <div
        className={`modal ${showModal ? "show" : ""}`}
        onClick={quickCloseModalHandler}
      >
        <div>
          <form className="shopping-cart">
            <ul>
              {menu.map(({ id, name, price, amountInCart }) => {
                if (amountInCart > 0) {
                  return (
                    <li key={id}>
                      <div>
                        <h3>{name}</h3>
                        <div>
                          <small>{formatCurrency(price)}</small>
                          <span>x {amountInCart}</span>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={(event) => minusAmountHandler(event, id)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button
                          onClick={(event) => addAmountHandler(event, id)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>

            <div>
              <h3>Total Amount</h3>
              <span>{formatCurrency(totalAmount)}</span>
            </div>

            <div>
              <button onClick={closeModalHandler}>Close</button>
              <button>Order</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
