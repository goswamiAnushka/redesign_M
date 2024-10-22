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
      <div className="flex flex-grow h-full flex-col lg:flex-row"> {/* Stack columns vertically on small screens */}
        {/* Left Sidebar (Only visible on larger screens) */}
        <div className={`hidden lg:block transition-all duration-300 ${isLeftColumnOpen ? 'w-48' : 'w-16'} lg:flex-shrink-0`}>
          <LeftColumn isOpen={isLeftColumnOpen} toggleSidebar={toggleLeftColumn} />
        </div>

        {/* Main Content */}
        <div className="transition-all duration-300 flex-grow p-2 md:p-4 lg:p-6 lg:ml-4"> {/* Adjusted padding for smaller screens */}
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
