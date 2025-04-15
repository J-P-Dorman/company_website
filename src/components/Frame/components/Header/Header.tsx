import { useState } from "react";
import { Link } from "react-router";
import imgMenu from "../../../../assets/icons/bars.svg";
import companyLogo from "../../../../assets/logo.svg";
import { useBreakpoint } from "../../../../utils";
import Button from "../../../Button/Button";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import PlayNow from "./components/PlayNow/PlayNow";
import Sheet from "./components/Sheet/Sheet";
import UserButton from "./components/UserButton/UserButton";
import "./Header.scss";

const Header = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "xs" || breakpoint === "s";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header">
      <div id="header-container">
        <div id="header-left">
          <div id="header-logo">
            <Link to="/">
              <img
                src={companyLogo}
                className="logo"
                alt="Games Company Logo"
              />
            </Link>
          </div>
        </div>

        <div id="header-right">
          {!isMobile && (
            <>
              <UserButton />
              <HeaderButton link="/news" onClick={() => {}}>
                News
              </HeaderButton>
              <PlayNow />
            </>
          )}

          {isMobile && (
            <>
              <Button
                id="menu-btn"
                className="btn-clear"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                <img className="icon" src={imgMenu} alt="menu" />
              </Button>
              <Sheet
                align="right"
                type="primary"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                header={(
                  <UserButton />
                )}
                body={(
                  <>
                  <HeaderButton link="/news" onClick={() => {}}>
                    News
                  </HeaderButton>
                  <PlayNow />
                </>
                )}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
