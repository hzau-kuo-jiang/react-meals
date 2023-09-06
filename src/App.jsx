import { useState } from "react";
import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Header/Header.jsx";
import HeroImage from "./components/HeroImage/HeroImage.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {
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

  function formatCurrency(amount) {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <>
      <Header showModalHandler={showModalHandler} />
      <HeroImage />
      <main>
        <Advertisement />
        <Menu formatCurrency={formatCurrency} />
      </main>

      <div
        className={`modal ${showModal ? "show" : ""}`}
        onClick={quickCloseModalHandler}
      >
        <Cart
          closeModalHandler={closeModalHandler}
          formatCurrency={formatCurrency}
        />
      </div>
    </>
  );
}

export default App;
