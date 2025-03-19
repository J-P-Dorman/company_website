import { useSelect } from "downshift";
import { useState } from "react";
import chevronDown from "../../assets/icons/chevron-down.svg";
import "./Select.scss";
import { Option } from './types';

type Props <T> = {
  label: string;
  options: Option<T>[];
  value?: Option<T>;
  onChange?: (option: Option<T>) => void;
};

const Select = <T,>({ label, options, value: valueParent, onChange }: Props<T>) => {
  const [valueLocal, setValueLocal] = useState<Option<T> | null>(valueParent ?? null);
  const [isFocus, setIsFocus] = useState(false);

  const value = valueParent === undefined ? valueLocal : valueParent;

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: options,
    defaultSelectedItem: valueParent,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      setValueLocal(selectedItem);
      onChange?.(selectedItem);
    },
  });

  const isEmpty = !selectedItem;
  const toggleButtonProps = getToggleButtonProps();

  return (
    <div
      className={`select ${isOpen ? " open" : ""}${isFocus ? " focus" : ""}${
        isEmpty ? " empty" : ""
      }`}
    >
      <div
        className="select-input"
        {...toggleButtonProps}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={(event) => {
          setIsFocus(false);
          toggleButtonProps?.onBlur?.(event);
        }}
      >
        <div className="select-input-border">
          <div className="select-input-label">
            <label className="select-input-label-text" {...getLabelProps()}>
              {label}
            </label>
          </div>
        </div>

        <div className="select-input-text">
          <span>{selectedItem?.label}</span>
          <img className="chevron" src={chevronDown} alt="select chevron" />
        </div>
      </div>

      <ul className="select-menu" {...getMenuProps()}>
        {isOpen &&
          options.map((option, index) => {
            const { label } = option;
            return (
              <li
                className={`select-option${
                  highlightedIndex === index ? " selected" : ""
                }`}
                key={`${label}${index}`}
                {...getItemProps({ item: option, index })}
              >
                {label}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;
