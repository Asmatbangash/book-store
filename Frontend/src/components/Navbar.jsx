import React from 'react'
import ThemeController from './ThemeController'
import InputBox from './InputBox'
import Button from './Button'

function Navbar() {
  const navItem = [
    {name: "Home", href: ""},
    {name: "about", href: ""},
    {name: "course", href: ""},
    {name: "contact", href: ""}
  ]
  return (
    <div className="w-screen-full space-x-7 mx-auto max-sm:px-0 px-6 navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navItem.map((item)=>(
          <li><a href={item.href}>{item.name}</a></li>
            ))}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">bookStore</a>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {navItem.map((item)=>(
          <li><a href={item.href}>{item.name}</a></li>
            ))}
      </ul>
    </div>
    <form className="w-100 form relative max-sm:hidden">
  <InputBox type='search' className='input w-full rounded-full px-4 py-1 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md' placeholder='search...'/>
</form>
<ThemeController />
    <div className="mx-2">
      <a className="btn bg-black text-white">logIn</a>
    </div>
  </div>
  )
}

export default Navbar