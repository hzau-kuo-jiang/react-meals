import styles from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem.jsx";

const Menu = ({ submitMenuHandler, formatCurrency }) => {
  const menu = [
    {
      id: "1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <ul className={styles.menu}>
      {menu.map(({ id, name, description, price }) => (
        <MenuItem
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
          formatCurrency={formatCurrency}
        />
      ))}
    </ul>
  );
};

export default Menu;
