import imgBackground from '../../assets/background.jpg';
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Frame from "../../components/Frame/Frame";
import Login from "../../components/Login/Login";
import Description from "./components/Description/Description";
import Hero from "./components/Hero/Hero";
import Newsletter from "./components/Newsletter/Newsletter";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" style={{backgroundImage: `url('${imgBackground}')`}}>
      <Frame>
        <Hero />
        <Content>
          <Description />
          <Newsletter />
        </Content>
        <Footer />
      </Frame>
      <Login />
    </div>
  );
};

export default Home;
