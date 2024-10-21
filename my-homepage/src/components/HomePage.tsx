import React, { useState } from 'react';
import Navbar from './Navbar';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

const HomePage: React.FC = () => {
  const [isLeftColumnOpen, setIsLeftColumnOpen] = useState(true);

  const toggleLeftColumn = () => {
    setIsLeftColumnOpen(!isLeftColumnOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-gray-100">
      <Navbar />

      <div className="flex">
        {/* Left Sidebar */}
        <LeftColumn isOpen={isLeftColumnOpen} toggleSidebar={toggleLeftColumn} />

        {/* Main Content */}
        <div
          className={`transition-all duration-300 flex-grow p-6 ${isLeftColumnOpen ? 'ml-64' : 'ml-16'}`}
        >
          <MiddleColumn />
        </div>

        {/* Right Sidebar */}
        <div className="w-72 p-4">
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
