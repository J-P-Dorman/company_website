import Frame from "../../components/Frame/Frame";
import Footer from "../../components/Footer/Footer";
import "./Game.scss";
import Login from "../../components/Login/Login";

const Game = () => {
  return (
    <div id="game">
      <Frame>
        <div className="content">
          <iframe src="/game_build/index.html" />
        </div>
        <Footer />
      </Frame>
      <Login />
    </div>
  );
};

export default Game;
