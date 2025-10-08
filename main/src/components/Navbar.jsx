import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Menu", "Shop", "Vendors", "Events", "Contact"];

  return (
    <nav className="bg-purple-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="../Images/logo.png" alt="ChopLife Logo" className="h-20 w-20" />

        {/* Center Nav */}
        <ul className="hidden md:flex space-x-6 font-medium items-center mx-auto">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="hover:text-orange-400 cursor-pointer">Cart 🛒</span>
          <button className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3 font-medium text-sm text-center">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-400 cursor-pointer">
              {item}
            </li>
          ))}
          <li className="hover:text-orange-400 cursor-pointer">Cart 🛒</li>
          <li>
            <button className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 w-full">
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
