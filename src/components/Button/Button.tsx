import { MouseEventHandler, PropsWithChildren } from "react";
import "./Button.scss";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  onFocus,
  onBlur,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={className ?? "btn-primary"}
      onClick={onClick}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

export default Button;
