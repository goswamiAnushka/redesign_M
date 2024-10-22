import React, { useState } from 'react';
import Navbar from './Navbar';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const [isLeftColumnOpen, setIsLeftColumnOpen] = useState(false); // Initially shrunk

  const toggleLeftColumn = () => {
    setIsLeftColumnOpen(!isLeftColumnOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col"> {/* Off-white background */}
      {/* Navbar */}
      <Navbar />

      {/* Main layout */}
      <div className="flex flex-grow h-full flex-col lg:flex-row relative"> {/* Stack columns vertically on small screens */}
        
        {/* Toggle Button for small screens */}
        <button
          onClick={toggleLeftColumn}
          className="lg:hidden absolute top-10 left-2 z-20 focus:outline-none text-xl text-[#cc3300]" // Smaller size and moved upwards
        >
          {isLeftColumnOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>

        {/* Left Sidebar */}
        <div
          className={`${
            isLeftColumnOpen ? 'block' : 'hidden'
          } lg:block transition-all duration-300 fixed z-10 lg:relative w-64 lg:w-16 lg:flex-shrink-0 bg-white shadow-lg h-full`}
        >
          <LeftColumn isOpen={isLeftColumnOpen} toggleSidebar={toggleLeftColumn} />
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-300 flex-grow p-2 md:p-4 lg:p-6 ${
            isLeftColumnOpen ? 'lg:ml-32' : 'lg:ml-16'
          }`}  // Adjusts margin based on sidebar's state
        >
          <MiddleColumn />
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-72 p-2 lg:p-4 overflow-auto"> {/* Always visible but full width on small screens */}
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
