import React, { useState } from 'react';
import { FaCog, FaClock, FaUserFriends } from 'react-icons/fa'; // Importing icons
import Navbar from './Navbar';

const UpcomingEvents: React.FC = () => {
  const [events] = useState([
    {
      title: 'Project Kickoff',
      date: 'October 23, 2024',
      time: '10:00 AM',
      managersCount: 2,
      workersCount: 3,
      guestsCount: 5,
    },
    {
      title: 'Design Review',
      date: 'October 25, 2024',
      time: '3:00 PM',
      managersCount: 1,
      workersCount: 2,
      guestsCount: 4,
    },
    {
      title: 'Sprint Planning',
      date: 'October 28, 2024',
      time: '9:00 AM',
      managersCount: 2,
      workersCount: 4,
      guestsCount: 6,
    },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-8">
        {/* Heading with improved font */}
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center tracking-wide">
          Upcoming Events
        </h2>

        {/* Event List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Event Title and Settings Icon */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <FaCog className="text-gray-300 hover:text-white transition-colors cursor-pointer" />
              </div>

              {/* Date and Time with Icon */}
              <p className="text-sm text-gray-200 flex items-center mb-4">
                <FaClock className="mr-2" /> {event.date} - {event.time}
              </p>

              {/* Attendees Information */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-gray-400 mb-1" />
                  <span className="text-white font-semibold">Managers</span>
                  <span className="text-lg text-gray-200">{event.managersCount}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-gray-400 mb-1" />
                  <span className="text-white font-semibold">Workers</span>
                  <span className="text-lg text-gray-200">{event.workersCount}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaUserFriends className="text-gray-400 mb-1" />
                  <span className="text-white font-semibold">Guests</span>
                  <span className="text-lg text-gray-200">{event.guestsCount}</span>
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
