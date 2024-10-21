import React from 'react';
import { FaBell, FaEnvelope, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-lg p-4">
      {/* Left Side: Logo and Navigation */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-indigo-500 focus:outline-none md:hidden">
          <FaBars className="text-xl" /> {/* Hamburger for mobile */}
        </button>

        <a href="/" className="text-lg font-semibold text-indigo-500">
          Makerble
        </a>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-700 hover:text-indigo-500">
              My Apps
            </button>
            {/* Add dropdown if necessary */}
          </div>
          <a href="/" className="text-gray-700 hover:text-indigo-500">
            Home
          </a>
          <a href="/explore" className="text-gray-700 hover:text-indigo-500">
            Explore
          </a>
        </div>
      </div>

      {/* Right Side: Notification, Email, Profile, and Create Button */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-indigo-500">
          <FaBell className="text-xl" />
        </button>
        <button className="text-gray-700 hover:text-indigo-500">
          <FaEnvelope className="text-xl" />
        </button>
        <div className="text-gray-700">Dummy Profile Name</div>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
          + Create
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
