import { JSX, useState } from "react";
import Button from "../../../../../Button/Button";
import "./Sheet.scss";

type Props = {
  type?: "primary";
  title?: string;
  align: "left" | "right" | "bottom";
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  header?: JSX.Element;
  body?: JSX.Element;
};

const Sheet = ({ type, title, align, header, body, isOpen: isOpenParent, setIsOpen: setIsOpenParent }: Props) => {
  const [isOpenLocal, setIsOpenLocal] = useState(isOpenParent ?? false);

  const isOpen = isOpenParent === undefined ? isOpenLocal : isOpenParent;
  const setIsOpen = setIsOpenParent === undefined ? setIsOpenLocal : setIsOpenParent;

  return (
    <div
      className={`sheet sheet-${align} sheet-${isOpen ? "open" : "closed"} sheet-${type ? type : "standard"}`}
    >
      <Button
        type="button"
        className="sheet-shade btn-clear"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      ></Button>

      <div className="sheet-content">
        <div className="sheet-header">
          {header}
        </div>

        <div className="sheet-body">{body}</div>
      </div>
    </div>
  );
};

export default Sheet;
