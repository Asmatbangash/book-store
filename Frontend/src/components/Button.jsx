import React from 'react'

function Button({type="submit",text="button", className=""}) {
  return (
    <button type={type} className={`btn cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button