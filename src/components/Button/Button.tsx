import { MouseEventHandler, PropsWithChildren } from "react";
import "./Button.scss";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
};

const Button = ({
  children,
  onClick,
  className,
  type,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={className ?? "btn-primary"}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
