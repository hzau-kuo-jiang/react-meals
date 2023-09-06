import mealsImage from "../../assets/meals.jpg";
import styles from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={styles["hero-image"]}>
      <img src={mealsImage} alt="meals" />
    </div>
  );
};

export default HeroImage;
