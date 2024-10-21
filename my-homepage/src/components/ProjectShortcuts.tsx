import React from 'react';
import { FaCog } from 'react-icons/fa';
import { AiFillFolder } from 'react-icons/ai';
import Navbar from './Navbar'; // Import the Navbar component

const ProjectShortcuts: React.FC = () => {
  const projects = [
    { name: 'Marketing Campaign', status: 'In Progress' },
    { name: 'Product Launch', status: 'Completed' },
    { name: 'Website Redesign', status: 'Pending' },
    { name: 'Sales Strategy', status: 'In Progress' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar /> {/* Include Navbar */}
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow mt-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center justify-between p-4 bg-blue-100 rounded-md shadow-sm hover:bg-blue-200 transition-all">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-lg text-blue-500" />
                <p className="text-lg font-semibold text-gray-800">{project.name}</p>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  project.status === 'In Progress' ? 'bg-yellow-300 text-yellow-800' : 
                  project.status === 'Completed' ? 'bg-green-300 text-green-800' : 
                  'bg-red-300 text-red-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <FaCog className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectShortcuts;
