import CartItem from "./CartItem.jsx";

const Cart = ({
  cart,
  totalAmount,
  closeModalHandler,
  addOneHandler,
  minusOneHandler,
  formatCurrency,
}) => {
  const CartList = () => {
    return (
      <ul className={"cart-list"}>
        {cart.map(({ id, name, price, count }) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            price={price}
            count={count}
            minusOneHandler={minusOneHandler}
            addOneHandler={addOneHandler}
            formatCurrency={formatCurrency}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className={"cart-container"}>
      <form className="cart">
        <CartList
          cart={cart}
          minusOneHandler={minusOneHandler}
          addOneHandler={addOneHandler}
          formatCurrency={formatCurrency}
        />

        <div className={"total"}>
          <h3>Total Amount</h3>
          <span>{formatCurrency(totalAmount)}</span>
        </div>

        <div className={"actions"}>
          <button onClick={closeModalHandler}>Close</button>
          {cart.length > 0 && <button>Order</button>}
        </div>
      </form>
    </div>
  );
};

export default Cart;
