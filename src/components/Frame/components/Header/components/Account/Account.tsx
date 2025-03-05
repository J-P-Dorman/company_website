import { useState } from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import "./Account.scss";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="account">
      {!loggedIn && <HeaderButton onClick={() => {}}>Log In</HeaderButton>}
      {loggedIn && <HeaderButton onClick={() => {}}></HeaderButton>}
    </div>
  );
};

export default Header;
