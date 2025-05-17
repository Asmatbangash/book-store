import React from "react";

function InputBox({
  type = "text",
  className = "",
  placeholder = "input",
  value,
  onChange,
  required,
}) {
  return (
    <input
      className={`cursor-pointer border-black  ${className}`}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputBox;
