import { useState } from "react";
import "./Input.scss";

type Props = {
  label: string;
};

const Input = ({ label }: Props) => {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={`input${isFocus ? " focus" : ""}`}>
      <div className="input-border">
        <div className="input-label">
          <div className="input-label-text">{label}</div>
        </div>
      </div>

      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
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
