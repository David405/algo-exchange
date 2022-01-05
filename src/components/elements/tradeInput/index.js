import React, { useEffect, useRef, useState } from "react";
import { CaretDown, CaretUp } from "../../../assets/icons";
import styles from "./styles.module.css";

const TradeInput = ({
  placeholder = "",
  handleInputChange = () => {},
  name = "",
  ref,
  containerStyles,
  inputTag = "Price",
  defaultValue,
  currency = "usdt",
  ...rest
}) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(defaultValue);

  // Get input value on change
  useEffect(() => {
    if (inputRef.current) handleInputChange(inputRef.current, inputValue); // Get input value on change
  }, [inputValue]);

  return (
    <div className={styles.input_container} style={containerStyles}>
      <p className={styles.input_tag}>{inputTag}</p>
      <p className={styles.input_currency}>{currency}</p>
      <input
        className={styles.input}
        type="number"
        min={0}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="new-password"
        name={name}
        value={inputValue}
        ref={ref ? ref : inputRef}
        {...rest}
      />
      {rest.error ? <p>{rest.error.message}</p> : null}

      <aside className={styles.caret_container}>
        <CaretUp
          className={styles.caret}
          onClick={() => setInputValue((value) => +value + 1)}
        />
        <CaretDown
          className={styles.caret}
          onClick={() => setInputValue((value) => (value > 0 ? +value - 1 : 0))}
        />
      </aside>
    </div>
  );
};
export { TradeInput };
