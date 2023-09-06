const MenuItemForm = ({ id, name, price, submitMenuHandler }) => {
  return (
    <form onSubmit={(event) => submitMenuHandler(event, { id, name, price })}>
      <label htmlFor={name}>
        Amount
        <input
          type="number"
          id={name}
          min={1}
          max={5}
          step={1}
          defaultValue={1}
          onCopy={(event) => event.preventDefault()}
        />
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MenuItemForm;
