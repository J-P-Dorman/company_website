import companyLogo from "../../../../assets/logo.svg";
import UserButton from "./components/UserButton/UserButton";
import PlayNow from "./components/PlayNow/PlayNow";
import "./Header.scss";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import { Link } from "react-router";
import Sheet from "./components/Sheet/Sheet";
import Button from "../../../Button/Button";
import { useState } from "react";
import { useBreakpoint, useResize } from "../../../../utils";
import imgMenu from "../../../../assets/icons/bars.svg";

const Header = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'xs' || breakpoint === 's';
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
              <HeaderButton onClick={() => {}}>News</HeaderButton>
              <PlayNow />
            </>
          )}

          {isMobile && (
            <>
              <Button
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
              >
                <>
                  <Button
                    className="btn-clear"
                    type="button"
                    onClick={() => {}}
                  >
                    Log In
                  </Button>
                  <Button
                    className="btn-clear"
                    type="button"
                    onClick={() => {}}
                  >
                    News
                  </Button>
                  <Button
                    className="btn-clear"
                    type="button"
                    onClick={() => {}}
                  >
                    Play Now
                  </Button>
                </>
              </Sheet>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
