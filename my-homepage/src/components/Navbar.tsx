import React from 'react';
import { FaBell, FaEnvelope, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-orange-700 shadow-lg p-4"> {/* Brick reddish-orange */}
      {/* Left Side: Logo and Navigation */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-yellow-300 focus:outline-none md:hidden">
          <FaBars className="text-xl" /> {/* Hamburger for mobile */}
        </button>

        <a href="/" className="text-lg font-semibold text-white">
          Makerble
        </a>

        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-white hover:text-yellow-300">
            Home
          </a>
          <a href="/explore" className="text-white hover:text-yellow-300">
            Explore
          </a>
          <button className="text-white hover:text-yellow-300">
            My Apps
          </button>
        </div>
      </div>

      {/* Right Side: Notification, Email, Profile, and Create Button */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <button className="text-white hover:text-yellow-300">
            <FaBell className="text-xl" />
          </button>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">5</span>
        </div>

        <div className="relative">
          <button className="text-white hover:text-yellow-300">
            <FaEnvelope className="text-xl" />
          </button>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">29</span>
        </div>

        <div className="flex items-center text-white">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sdlP4jAq8B49ZK3UQg0aEiNiRdwNy_AmXH2CZ84YKjsnxwCdCtCCPngKyOq7grf78rw&usqp=CAU" 
            alt="Profile" 
            className="h-10 w-10 rounded-full mr-2" 
          />
          Dummy Profile Name
        </div>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300">
          + Create
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
