
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-5 bg-[#f8f5f2]/90 backdrop-blur-md shadow-sm">

       
        <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-[#5a3e36] cursor-pointer hover:opacity-80 transition">
          MyStore
        </h1>

        <div className="hidden md:flex gap-6 lg:gap-12 text-[#7a5c50] font-medium text-sm lg:text-base">

          <Link
            to="/"
            className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#5a3e36] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#5a3e36] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/product"
            className="relative group">
            Products
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#5a3e36] transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

      
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6 text-[#5a3e36] text-base sm:text-lg">

          <Link
            to="/cart"
            className="p-2 rounded-full hover:bg-[#efeae6] hover:scale-110 transition">
            <FaShoppingCart />
          </Link>

          <Link
            to="/login"
            className="p-2 rounded-full hover:bg-[#efeae6] hover:scale-110 transition">
            <FaUser />
          </Link>

          <div
            className="md:hidden cursor-pointer text-lg"
            onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>

        </div>

      </nav>
      <div
        className={`
          fixed top-0 right-0 h-full w-[260px]
          bg-[#f8f5f2]
          shadow-xl
          z-[100]
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}>

             <div className="flex justify-end p-5">

          <FaTimes
            className="text-xl text-[#5a3e36] cursor-pointer"
            onClick={() => setMenuOpen(false)}/>

        </div>

        <div className="flex flex-col gap-8 px-8 mt-10 text-[#7a5c50] font-medium text-lg">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}> Home</Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}> About</Link>

          <Link
            to="/product"
            onClick={() => setMenuOpen(false)}>  Products</Link>

        </div>
      </div>
    </>
  )
}

export default Navbar