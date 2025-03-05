import HeroImage from "../../../../assets/hero.png";
import "./Hero.scss";

const Home = () => {
  return (
    <div id="hero">
      <img src={HeroImage} alt="Hero image" />
    </div>
  );
};

export default Home;
