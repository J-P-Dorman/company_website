import { PropsWithChildren } from "react";
import "./HeaderButton.scss";

type Props = {
  onClick: () => void;
  onFocus: React.FocusEventHandler<HTMLButtonElement> | undefined;
  onBlur: React.FocusEventHandler<HTMLButtonElement> | undefined;
};

const HeaderButton = ({
  children,
  onClick,
  onFocus,
  onBlur,
}: PropsWithChildren<Props>) => {
  return (
    <div id="header-button">
      <button onFocus={onFocus} onBlur={onBlur} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default HeaderButton;
