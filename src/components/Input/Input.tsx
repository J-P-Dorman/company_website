import { useState } from "react";
import "./Input.scss";

type Props = {
  label: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  type = "text",
  value: valueParent,
  onChange,
}: Props) => {
  const [valueLocal, setValueLocal] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const value = valueParent === undefined ? valueLocal : valueParent;
  const isEmpty = value === "";

  return (
    <div
      className={`input${isFocus ? " focus" : ""}${isEmpty ? " empty" : ""}`}
    >
      <div className="input-border">
        <div className="input-label">
          <div className="input-label-text">{label}</div>
        </div>
      </div>

      <input
        type={type}
        value={value}
        onChange={(event) => {
          setValueLocal(event.target.value);
          if (onChange) onChange(event);
        }}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
    </div>
  );
};

export default Input;
