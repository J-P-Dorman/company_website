import { useState } from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import "./PlayNow.scss";

const PlayNow = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="play-now">
      <HeaderButton onClick={() => {}}>Play Now</HeaderButton>
    </div>
  );
};

export default PlayNow;
