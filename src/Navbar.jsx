// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaShoppingCart, FaUser } from 'react-icons/fa'

// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between px-10 py-6 bg-[#f8f5f2] shadow-sm">

//       <h1 className="text-2xl font-semibold tracking-wide text-[#5a3e36]">
//          MyStore</h1>

//       <div className="flex gap-10 text-[#7a5c50] font-medium">
//         <Link to="/" className="hover:text-[#5a3e36] transition">Home</Link>
//         <Link to="/about" className="hover:text-[#5a3e36] transition">About</Link>
//         <Link to="/product" className="hover:text-[#5a3e36] transition">Products</Link>
//       </div>

//       <div className="flex items-center gap-6 text-[#5a3e36] text-lg">
//         <Link to="/cart" className="hover:scale-110 transition"><FaShoppingCart /></Link>
//         <Link to="/login" className="hover:scale-110 transition"><FaUser /></Link>
//       </div>

//     </nav>
//   )
// }

// export default Navbar




import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-5 bg-[#f8f5f2]/90 backdrop-blur-md shadow-sm">

      {/* LOGO */}
      <h1 className="text-2xl font-semibold tracking-wide text-[#5a3e36] cursor-pointer hover:opacity-80 transition">
        MyStore
      </h1>

      {/* CENTER LINKS */}
      <div className="flex gap-12 text-[#7a5c50] font-medium">
        <Link 
          to="/" 
          className="relative group"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#5a3e36] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/about" 
          className="relative group"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#5a3e36] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link 
          to="/product" 
          className="relative group"
        >
          Products
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#5a3e36] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-6 text-[#5a3e36] text-lg">
        
        <Link 
          to="/cart" 
          className="p-2 rounded-full hover:bg-[#efeae6] hover:scale-110 transition"
        >
          <FaShoppingCart />
        </Link>

        <Link 
          to="/login" 
          className="p-2 rounded-full hover:bg-[#efeae6] hover:scale-110 transition">
          <FaUser />
        </Link>

      </div>

    </nav>
  )
}

export default Navbar