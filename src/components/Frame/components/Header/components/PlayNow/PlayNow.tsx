import { Link } from "react-router";
import HeaderButton from "../HeaderButton/HeaderButton";
import "./PlayNow.scss";

const PlayNow = () => {
  return (
    <div id="play-now">
      <Link to="/game">
        <HeaderButton onClick={() => {}}>Play Now</HeaderButton>
      </Link>
    </div>
  );
};

export default PlayNow;
