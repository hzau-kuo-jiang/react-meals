import MenuItemForm from "./MenuItemForm.jsx";

const MenuItem = ({
  id,
  name,
  price,
  description,
  formatCurrency,
  submitMenuHandler,
}) => {
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <i>{description}</i>
        <span>{formatCurrency(price)}</span>
      </div>
      <MenuItemForm
        id={id}
        name={name}
        price={price}
        submitMenuHandler={submitMenuHandler}
      />
    </li>
  );
};

export default MenuItem;
