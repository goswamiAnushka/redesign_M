import React from 'react';
import { FaCog } from 'react-icons/fa';
import { AiFillFolder, AiOutlinePlus } from 'react-icons/ai';
import Navbar from './Navbar';

const ProjectShortcuts: React.FC = () => {
  const projects = [
    { name: 'Marketing Campaign', status: 'In Progress' },
    { name: 'Product Launch', status: 'Completed' },
    { name: 'Website Redesign', status: 'Pending' },
    { name: 'Sales Strategy', status: 'In Progress' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-orange-900">Projects</h2>
          <button className="bg-orange-600 text-white rounded-lg px-4 py-2 flex items-center shadow-md hover:bg-orange-700 transition duration-300">
            <AiOutlinePlus className="mr-2" />
            Add Project
          </button>
        </div>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center justify-between p-4 bg-white rounded-md shadow-md hover:bg-orange-50 border border-orange-300 transition-all">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-lg text-orange-500" />
                <p className="text-lg font-semibold text-gray-800">{project.name}</p>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  project.status === 'In Progress' ? 'bg-yellow-300 text-yellow-800' : 
                  project.status === 'Completed' ? 'bg-green-300 text-green-800' : 
                  'bg-red-300 text-red-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <FaCog className="text-orange-500 hover:text-orange-700 cursor-pointer transition-colors" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectShortcuts;
