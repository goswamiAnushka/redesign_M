import React, { useState } from 'react';
import Navbar from './Navbar';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

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
      <div className="flex flex-grow h-full"> {/* Ensures full height and proper growth */}
        {/* Left Sidebar */}
        <LeftColumn isOpen={isLeftColumnOpen} toggleSidebar={toggleLeftColumn} />

        {/* Main Content */}
        <div
          className={`transition-all duration-300 flex-grow p-4 md:p-6 ${
            isLeftColumnOpen ? 'ml-64' : 'ml-16'
          }`} // Margin adjusts based on sidebar state
        >
          <MiddleColumn />
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-72 p-4 overflow-auto"> {/* Always visible on larger screens */}
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
