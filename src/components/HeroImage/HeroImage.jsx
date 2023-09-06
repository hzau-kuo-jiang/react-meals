import mealsImage from "../../assets/meals.jpg";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={mealsImage} alt="meals" />
    </div>
  );
};

export default HeroImage;
