import { useState } from "react";
import companyLogo from "../../../../assets/logo.svg";
import Account from "./components/Account/Account";
import PlayNow from "./components/PlayNow/PlayNow";
import "./Header.scss";
import HeaderButton from "./components/HeaderButton/HeaderButton";

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <div id="header">
      <div id="header-container">
        <div id="header-left">
          <div id="header-logo">
            <img src={companyLogo} className="logo" alt="Games Company Logo" />
          </div>
        </div>

        <div id="header-right">
          <HeaderButton onClick={() => {}}>News</HeaderButton>
          <Account />
          <PlayNow />
        </div>
      </div>
    </div>
  );
};

export default Header;
