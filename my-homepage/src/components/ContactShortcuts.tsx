import React from 'react';
import { FaPlus, FaUserCircle } from 'react-icons/fa';

const ContactShortcuts: React.FC = () => {
  const contacts = [
    'John Doe',
    'Jane Smith',
    'Michael J',
  ];

  return (
    <div className="relative transition-transform duration-500 transform scale-100 hover:scale-105 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-2xl p-4 max-w-xs mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white transform transition-transform duration-300 hover:scale-105">Contacts</h2>
        <button className="bg-white text-blue-500 rounded-full p-2 hover:bg-gray-200 transition-colors shadow-md">
          <FaPlus />
        </button>
      </div>
      <div className="flex flex-col space-y-2">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors transform hover:-translate-y-1 duration-200"
          >
            <FaUserCircle className="text-gray-600 text-3xl mr-4" />
            <p className="text-lg font-semibold text-gray-800">{contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactShortcuts;
