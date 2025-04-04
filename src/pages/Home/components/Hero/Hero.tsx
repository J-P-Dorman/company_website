import HeroImage from "../../../../assets/hero.jpg";
import "./Hero.scss";

const Home = () => {
  return (
    <div id="hero" style={{backgroundImage: `url('${HeroImage}')`}}>
      <div id="hero-text">
      <div id="hero-header">Choose Your Adventure</div>
      <div id="hero-subheader">Alpha test now live!</div>
      <div id="hero-body">Log in / Play now today!</div>
      <div id="hero-disclaimer">(Don't worry, no fields are connected to the api)</div>
      </div>
    </div>
  );
};

export default Home;
