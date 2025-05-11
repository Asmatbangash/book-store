import React from "react";

function InputBox({
  type = "text",
  className = "",
  placeholder = "input",
  value,
  onChange,
}) {
  return (
    <input
      className={`cursor-pointer border-black  ${className}`}
      placeholder={placeholder}
      required="true"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputBox;
