import { PropsWithChildren } from "react";
import "./HeaderButton.scss";
import { Link } from "react-router";

type Props = {
  onClick: () => void;
  onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
  link?: string;
};

const HeaderButton = ({
  children,
  onClick,
  onFocus,
  onBlur,
  link,
}: PropsWithChildren<Props>) => {
  return (
    <div className="header-button">
      {link && (
        <Link to={link}>
          <button onFocus={onFocus} onBlur={onBlur} onClick={onClick}>
            {children}
          </button>
        </Link>
      )}

      {!link && (
        <button onFocus={onFocus} onBlur={onBlur} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
};

export default HeaderButton;
