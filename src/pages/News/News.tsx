import Footer from "../../components/Footer/Footer";
import Frame from "../../components/Frame/Frame";
import Login from "../../components/Login/Login";
import "./News.scss";

const Game = () => {
  return (
    <div id="game">
      <Frame>
        <div className="content">
          <div className="construction">Page under construction</div>
        </div>
        <Footer />
      </Frame>
      <Login />
    </div>
  );
};

export default Game;
