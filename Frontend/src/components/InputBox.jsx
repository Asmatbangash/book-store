import React from "react";

function InputBox({ type = "text", className = "", placeholder = "input" }) {
  return (
    <input
      className={`cursor-pointer border-black  ${className}`}
      placeholder={placeholder}
      required=""
      type={type}
    />
  );
}

export default InputBox;
