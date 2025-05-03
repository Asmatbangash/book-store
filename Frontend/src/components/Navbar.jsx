import React, { useEffect, useState } from 'react'
import ThemeController from './ThemeController'
import InputBox from './InputBox'
import {Link} from 'react-router-dom'

function Navbar() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
     const handleSticky = () =>{
      if(window.scrollY > 0){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleSticky)
    return () => {
      window.removeEventListener('scroll', handleSticky)
    }
  }, [])

  useEffect(() => {
    console.log("Sticky state changed:", sticky);
  }, [sticky]);
  
  

  const navItem = [
    {name: "Home", href: "/"},
    {name: "about", href: "/about"},
    {name: "course", href: "/courses"},
    {name: "contact", href: "/contact"}
  ]
  return (
    <div className={`w-screen-full space-x-7 md:space-x-0 mx-auto max-sm:px-0  px-6  navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-1  ${ sticky ? "sticky-navbar top-0 bg-base-300 duration-300 transition-all ease-in-out shadow-md z-50" : ""}`}>
    <div className="navbar-start ">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow ">
            {navItem.map((item)=>(
          <li><Link to={item.href}>{item.name}</Link></li>
            ))}
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost text-xl">bookStore</Link>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {navItem.map((item)=>(
          <li><Link to={item.href}>{item.name}</Link></li>
            ))}
      </ul>
    </div>
    <form className="w-100 form relative max-sm:hidden">
  <InputBox type='search' className='input w-full-screen rounded-full px-4 py-1 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md' placeholder='search...'/>
</form>
<ThemeController />
    <div className="mx-2">
      <a className="btn bg-black text-white">logIn</a>
    </div>
  </div>
  )
}

export default Navbar