import companyLogo from "../../../../assets/logo.svg";
import UserButton from "./components/UserButton/UserButton";
import PlayNow from "./components/PlayNow/PlayNow";
import "./Header.scss";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import { Link } from "react-router";

const Header = () => {
  return (
    <div id="header">
      <div id="header-container">
        <div id="header-left">
          <div id="header-logo">
            <Link to="/">
              <img src={companyLogo} className="logo" alt="Games Company Logo" />
            </Link>
        </div>
        </div>

        <div id="header-right">
          <UserButton />
          <HeaderButton onClick={() => {}}>News</HeaderButton>
          <PlayNow />
        </div>
      </div>
    </div>
  );
};

export default Header;
