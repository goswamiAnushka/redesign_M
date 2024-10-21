import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

// Define the type for progress data
type ProgressData = {
  [key: string]: { progress: number };
};

const ProgressBoard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>('Project Alpha');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Dummy progress data
  const progressData: ProgressData = {
    'Project Alpha': { progress: 80 },
    'Project Beta': { progress: 50 },
    'Task XYZ': { progress: 30 },
  };

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="font-bold text-xl mb-2">Progress Board</h2>

      {/* Dropdown for selecting project */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between p-3 bg-orange-600 text-white rounded-lg w-full hover:bg-orange-700 transition"
        >
          {selectedProject} <FiChevronDown />
        </button>
        {dropdownOpen && (
          <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg w-full z-10">
            {Object.keys(progressData).map((project) => (
              <button
                key={project}
                className="block p-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  setSelectedProject(project);
                  setDropdownOpen(false);
                }}
              >
                {project}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Statistical Progress Bar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <span className="mr-2 font-semibold">{selectedProject} Progress:</span>
          <span>{progressData[selectedProject].progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-orange-600 h-4 rounded-full"
            style={{ width: `${progressData[selectedProject].progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBoard;

// Adding this empty export to ensure it's treated as a module
export {};
