import React, { useEffect, useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [cartlength ,setcartlength] = useState("")
 
 useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  setcartlength(cart.length)
 }, [localStorage.getItem("cart")])
 
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-600   ">
          <a href="/">Brand</a>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-6   md:items-center justify-center">
          <a
            href="/"
            className="hover:text-teal-600 text-gray-700 font-medium transition-colors"
          >
            Product
          </a>
          <a
            href="#"
            className="hover:text-teal-600 text-gray-700 font-medium transition-colors"
          >
            About Us
          </a>
        </div>

        {/* Icons */}
        <div className="flex space-x-4  ">
      
          <button
            className="hover:text-teal-400 text-teal-600  transition-colors"
            aria-label="User"
          >
            <FaUser size={20} />
          </button>
          <a
      href="/cart"
      className="flex items-center gap-2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200 ease-in-out"
      aria-label="Cart"
    >
      <FaShoppingCart size={20} />
      {cartlength > 0 && (
        <span className="text-sm font-semibold">{cartlength}</span>
      )}
    </a>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle Menu"
          >
            <FaBars size={24} />
          </button>
         
        </div>
      </div>

      {/* Mobile Menu */}
      {  (
        <div className={`md:hidden bg-teal-50 shadow-inner transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0 " : "translate-x-[100%] h-0 "} `}>
          <div className="flex flex-col items-start px-2  justify-start  py-4">
          <div   className=" flex-row-reverse text-teal-600 mx-1 overflow-hidden flex items-center w-full rounded-full bg-teal-100 py-1 hover:text-teal-600  transition-colors"
         ><button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="  text-teal-600 mx-2    bg-teal-100 py-1 hover:text-teal-600  transition-colors"
            aria-label="Toggle Menu"
          > 
            <FaSearch size={20} />
          </button>
          <input type="text" className=' bg-teal-100  border-none w-48 ' placeholder='Search'/>
        </div>    <a
              href="/"
              className="hover:text-teal-600 hover:border-b hover:bg-teal-100 border-b w-full text-left px-1 py-2 text-gray-700 font-medium transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="hover:text-teal-600 hover:border-b hover:bg-teal-100 text-left border-b w-full px-1 py-2 text-gray-700 font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:text-teal-600 hover:border-b hover:bg-teal-100 text-left border-b w-full px-1 py-2 text-gray-700 font-medium transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
