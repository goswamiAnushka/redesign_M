import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaBars, FaEllipsisV, FaSearch, FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [appsDropdown, setAppsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="flex items-center justify-between bg-orange-600 shadow-lg p-3 text-sm relative">
      {/* Left Side: Logo and Navigation Tabs */}
      <div className="flex items-center space-x-4">
        <a href="/">
          <img 
            src="https://www.pinclipart.com/picdir/big/308-3089911_default-clipart.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain" 
          />
        </a>

        {/* Home Link (Visible on larger screens only) */}
        <a href="/" className="hidden md:block text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:underline">
          Home
        </a>

        {/* My Apps with Dropdown (visible on larger screens) */}
        <div className="hidden md:relative md:block">
          <button 
            className="flex items-center text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setAppsDropdown(!appsDropdown)}
          >
            My Apps <FaChevronDown className="ml-1" />
          </button>
          {appsDropdown && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
              <a href="/app1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">App 1</a>
              <a href="/app2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">App 2</a>
              <a href="/app3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">App 3</a>
            </div>
          )}
        </div>

        {/* Explore Link (Visible on larger screens only) */}
        <a href="/explore" className="hidden md:block text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:underline">
          Explore
        </a>
      </div>

      {/* Center: Slimmer Search Bar (visible on larger screens) */}
      <div className="hidden md:flex flex-grow mx-4">
        <div className="flex items-center bg-white rounded-md px-2 py-1 w-full max-w-xs shadow-inner">
          <FaSearch className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="ml-2 bg-transparent focus:outline-none w-full text-gray-600 focus:border-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-50 border-b-2 border-transparent" 
          />
        </div>
      </div>

      {/* Right Side: Notifications, Profile, and More Options */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <button className="text-white hover:text-yellow-300 transition duration-300 ease-in-out">
            <FaBell className="text-lg" />
          </button>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">5</span>
        </div>

        <div className="relative">
          <button className="text-white hover:text-yellow-300 transition duration-300 ease-in-out">
            <FaEnvelope className="text-lg" />
          </button>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">29</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-white hover:text-yellow-300 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars className="text-xl" />
        </button>

        {/* Profile image and name (visible on mobile) */}
        <div className="flex items-center text-white">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sdlP4jAq8B49ZK3UQg0aEiNiRdwNy_AmXH2CZ84YKjsnxwCdCtCCPngKyOq7grf78rw&usqp=CAU" 
            alt="Profile" 
            className="h-8 w-8 rounded-full mr-2" 
          />
          <span className="hidden md:block">Anushka Goswami</span>
        </div>

        <button className="hidden md:block bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out shadow hover:shadow-lg">
          + Create
        </button>

        {/* More Options on desktop */}
        <button className="hidden md:block text-white hover:text-yellow-300">
          <FaEllipsisV className="text-lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 z-10">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Home</a>
          <a href="/explore" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Explore</a>
          <div className="relative">
            <button 
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => setAppsDropdown(!appsDropdown)}
            >
              My Apps <FaChevronDown className="ml-1 inline" />
            </button>
            {appsDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                <a href="/app1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">App 1</a>
                <a href="/app2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">App 2</a>
                <a href="/app3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">App 3</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
