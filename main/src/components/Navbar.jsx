import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [leaveDelay, setLeaveDelay] = useState({ shop: false, vendors: false });
  const [mobileDropdown, setMobileDropdown] = useState({ vendors: false });

  const handleMouseEnter = (key) => {
    setLeaveDelay((prev) => ({ ...prev, [key]: false }));
  };

  const handleMouseLeave = (key) => {
    setLeaveDelay((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLeaveDelay((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const navLinkClass = ({ isActive }) =>
    `hover:text-orange-400 transition ${
      isActive ? "text-orange-300 underline" : "text-white"
    }`;

  return (
    <nav className="bg-purple-800 text-white px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="../Images/logo.png"
            alt="ChopLife Logo"
            className="w-auto h-20" 
          />
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          {/* Shop */}
          <li
            className={`relative group ${leaveDelay.shop ? "leave-delay" : ""}`}
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={() => handleMouseLeave("shop")}
          >
            <NavLink to="/menu" className={navLinkClass}>
              Shop
            </NavLink>
          </li>

          {/* Vendors Dropdown */}
          <li
            className={`relative group ${
              leaveDelay.vendors ? "leave-delay" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("vendors")}
            onMouseLeave={() => handleMouseLeave("vendors")}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-400">
              <span>Vendors</span>
              <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </div>
            <div className="dropdown-content absolute left-0 mt-2 bg-white text-purple-800 rounded shadow-lg w-44 z-10">
              <NavLink
                to="/vendors/list"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                Vendor List
              </NavLink>
              <NavLink
                to="/vendors/apply"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                Become a Vendor
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative cursor-pointer hover:text-orange-400">
            <Link to={"/cart"}>
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </Link>
          </div>
          <NavLink to="/login">
            <button className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Login
            </button>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="text-white" /> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-purple-700 text-white px-6 py-4 space-y-3 transition-all duration-300">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            Shop
          </NavLink>

          {/* Mobile Vendors Dropdown */}
          <div>
            <button
              onClick={() =>
                setMobileDropdown((prev) => ({
                  ...prev,
                  vendors: !prev.vendors,
                }))
              }
              className="w-full flex justify-between items-center hover:text-orange-400"
            >
              <span>Vendors</span>
              <FaChevronDown
                className={`transition-transform ${
                  mobileDropdown.vendors ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileDropdown.vendors && (
              <div className="ml-4 flex flex-col mt-2 space-y-2">
                <NavLink to="/vendors/list" className={navLinkClass}>
                  Vendor List
                </NavLink>
                <NavLink to="/vendors/apply" className={navLinkClass}>
                  Become a Vendor
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/events" className={navLinkClass}>
            Events
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <div className="flex justify-between items-center pt-2">
            <Link to={"/cart"} className="hover:text-orange-400">
              <FaShoppingCart size={20} />
            </Link>
            <NavLink to="/login">
              <button className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
