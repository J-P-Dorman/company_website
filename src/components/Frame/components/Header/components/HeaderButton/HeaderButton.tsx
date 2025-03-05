import { PropsWithChildren, useState } from "react";
import "./HeaderButton.scss";

type Props = {
  onClick: () => void;
};

const HeaderButton = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <div id="header-button">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default HeaderButton;
