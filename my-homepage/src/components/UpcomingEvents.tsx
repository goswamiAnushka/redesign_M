import React, { useState } from 'react';
import { FaCog, FaClock, FaUserFriends, FaPlus } from 'react-icons/fa';
import Navbar from './Navbar';

const UpcomingEvents: React.FC = () => {
  const [events] = useState([
    { title: 'Project Kickoff', date: 'October 23, 2024', time: '10:00 AM', managersCount: 2, workersCount: 3, guestsCount: 5 },
    { title: 'Design Review', date: 'October 25, 2024', time: '3:00 PM', managersCount: 1, workersCount: 2, guestsCount: 4 },
    { title: 'Sprint Planning', date: 'October 28, 2024', time: '9:00 AM', managersCount: 2, workersCount: 4, guestsCount: 6 },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-orange-900 tracking-wide">Upcoming Events</h2>
          <button className="bg-orange-600 text-white rounded-lg px-4 py-2 flex items-center shadow-md hover:bg-orange-700 transition duration-300">
            <FaPlus className="mr-2" />
            Add Event
          </button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 border border-orange-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-orange-800">{event.title}</h3>
                <FaCog className="text-orange-500 hover:text-orange-700 transition-colors cursor-pointer" />
              </div>
              <p className="text-sm text-gray-600 flex items-center mb-4">
                <FaClock className="mr-2 text-orange-500" /> {event.date} - {event.time}
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-orange-500 mb-1" />
                  <span className="text-gray-700 font-semibold">Managers</span>
                  <span className="text-lg text-gray-500">{event.managersCount}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-orange-500 mb-1" />
                  <span className="text-gray-700 font-semibold">Workers</span>
                  <span className="text-lg text-gray-500">{event.workersCount}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-orange-500 mb-1" />
                  <span className="text-gray-700 font-semibold">Guests</span>
                  <span className="text-lg text-gray-500">{event.guestsCount}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvents;
