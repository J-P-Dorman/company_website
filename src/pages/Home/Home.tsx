import Frame from "../../components/Frame/Frame";
import Hero from "./components/Hero/Hero";
import Description from "./components/Description/Description";
import Footer from "../../components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import "./Home.scss";
import Content from "../../components/Content/Content";
import Login from "../../components/Login/Login";

const Home = () => {
  return (
    <div id="home">
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
