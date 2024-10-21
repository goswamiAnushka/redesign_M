import React from 'react';
import { FaCog } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';

const ProjectShortcuts: React.FC = () => {
  const projects = ['Marketing Campaign', 'Product Launch', 'Website Redesign', 'Sales Strategy'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow mt-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="flex items-center justify-between p-4 bg-blue-100 rounded-md shadow-sm hover:bg-blue-200 transition-all">
            <div className="flex items-center space-x-3">
              <AiFillFolder className="text-lg text-blue-500" />
              <p className="text-lg font-semibold text-gray-800">{project}</p>
            </div>
            <FaCog className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectShortcuts;
