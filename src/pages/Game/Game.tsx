import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Frame from "../../components/Frame/Frame";
import Login from "../../components/Login/Login";
import "./Game.scss";
import { useBreakpoint } from "../../utils";

const Game = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "xs" || breakpoint === "s";
  return (
    <div id="game">
      <Frame>
        <div className="content">
          <iframe src="/game_build/index.html" />
          {isMobile && (<div id="mobile-warning">
            <div>Mobile controls not implemented yet, try on desktop</div>
            <div>bit.ly/42PwBhF</div>
            </div>)}
        </div>
        <Footer />
      </Frame>
      <Login />
    </div>
  );
};

export default Game;
