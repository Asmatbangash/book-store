import React from 'react'

function Button({type="submit",text="button", className="", onClick}) {
  return (
    <button type={type} className={`cursor-pointer ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button