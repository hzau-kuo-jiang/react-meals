import { useEffect, useState } from "react";
import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Header/Header.jsx";
import HeroImage from "./components/HeroImage/HeroImage.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [beBumped, setBeBumped] = useState(false);

  function submitMenuHandler(event, { id, name, price }) {
    event.preventDefault();
    const addCount = Number(event.target[0].value);
    setCart((prevCart) =>
      prevCart.find((item) => item.id === id)
        ? updateCart(prevCart, id, addCount)
        : pushToCart(prevCart, id, name, price, addCount),
    );
  }

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

  useEffect(() => {
    const totalNumber = cart.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    setTotalNumber(totalNumber);

    const totalAmount = cart.reduce((acc, item) => {
      return acc + item.count * item.price;
    }, 0);
    setTotalAmount(totalAmount);

    setBeBumped(true);
    let timer = setTimeout(() => {
      setBeBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  function addOneHandler(event, id) {
    event.preventDefault();
    setCart((prevCart) => {
      return updateCart(prevCart, id, 1);
    });
  }

  function minusOneHandler(event, id) {
    event.preventDefault();
    setCart((prevCart) => {
      return updateCart(prevCart, id, -1);
    });
  }

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

  function formatCurrency(amount) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <>
      <Header
        showModalHandler={showModalHandler}
        totalNumber={totalNumber}
        beBumped={beBumped}
      />
      <HeroImage />
      <main>
        <Advertisement />
        <Menu
          submitMenuHandler={submitMenuHandler}
          formatCurrency={formatCurrency}
        />
      </main>

      <div
        className={`modal ${showModal ? "show" : ""}`}
        onClick={quickCloseModalHandler}
      >
        <Cart
          cart={cart}
          totalAmount={totalAmount}
          closeModalHandler={closeModalHandler}
          addOneHandler={addOneHandler}
          minusOneHandler={minusOneHandler}
          formatCurrency={formatCurrency}
        />
      </div>
    </>
  );
}

export default App;
