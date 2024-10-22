import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaBars, FaEllipsisV, FaSearch, FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [appsDropdown, setAppsDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-orange-600 shadow-lg p-3 text-sm"> {/* Darker orange */}
      {/* Left Side: Logo and Navigation Tabs */}
      <div className="flex items-center space-x-4">
        <a href="/">
          <img 
            src="https://www.pinclipart.com/picdir/big/308-3089911_default-clipart.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain" 
          />
        </a>
        <a href="/" className="text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
          Home
        </a>

        {/* My Apps with Dropdown */}
        <div className="relative">
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

        <a href="/explore" className="text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
          Explore
        </a>
      </div>

      {/* Center: Slimmer Search Bar */}
      <div className="hidden md:flex flex-grow mx-4">
        <div className="flex items-center bg-white rounded-md px-2 py-1 w-full max-w-xs shadow-inner">
          <FaSearch className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="ml-2 bg-transparent focus:outline-none w-full text-gray-600" 
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

        <div className="flex items-center text-white">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sdlP4jAq8B49ZK3UQg0aEiNiRdwNy_AmXH2CZ84YKjsnxwCdCtCCPngKyOq7grf78rw&usqp=CAU" 
            alt="Profile" 
            className="h-8 w-8 rounded-full mr-2" 
          />
          Anushka Goswami
        </div>

        <button className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-300 transition duration-300 ease-in-out">
          + Create
        </button>

        <button className="md:hidden text-white hover:text-yellow-300 focus:outline-none">
          <FaBars className="text-xl" />
        </button>

        <button className="hidden md:block text-white hover:text-yellow-300">
          <FaEllipsisV className="text-lg" /> {/* More Options on desktop */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
