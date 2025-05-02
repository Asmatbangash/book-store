import React from 'react'

function Button({text='button', className=""}) {
  return (
    <button className={`btn btn-primary ${className}`}>{text}</button>
  )
}

export default Button