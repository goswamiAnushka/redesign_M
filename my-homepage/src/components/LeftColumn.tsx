import React, { useState } from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaPlus,
  FaCog,
  FaFolderOpen,
  FaRegCalendarAlt,
  FaRegUser,
  FaRegImage,
} from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface LeftColumnProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ isOpen, toggleSidebar }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const projects = ['Marketing Campaign', 'Product Launch'];
  const events = ['Event 1', 'Event 2'];
  const contacts = ['John Doe', 'Jane Smith'];
  const organizations = ['Organization 1', 'Organization 2'];

  const followers = [
    { name: 'Follower 1', image: 'https://profesordefisica.org/wp-content/uploads/2024/04/profesor-de-fisica-en-La-Molina.png' },
    { name: 'Follower 2', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/788.png' },
    { name: 'Follower 3', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Follower 4', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  ];

  const following = [
    { name: 'Following 1', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Following 2', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Following 3', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Following 4', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
  ];

  const handleSectionClick = (section: string) => {
    if (!isOpen) {
      toggleSidebar(); // Open the sidebar
    }
    setActiveSection(activeSection === section ? null : section);
  };

  const renderSectionItems = (items: string[], section: string) => {
    if (activeSection !== section) return null;

    return (
      <ul className="mt-2 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-200 p-2 rounded-md transition-all hover:bg-red-400">
            <div className="flex items-center space-x-2">
              {section === 'projects' ? <FaFolderOpen className="text-lg text-red-500" /> :
                section === 'events' ? <FaRegCalendarAlt className="text-lg text-red-500" /> :
                section === 'contacts' ? <FaRegUser className="text-lg text-red-500" /> :
                <AiOutlineTeam className="text-lg text-red-500" />
              }
              <span className="text-gray-900">{item}</span>
            </div>
            {section !== 'followers' && section !== 'following' && (
              <FaCog className="text-gray-400 hover:text-white transition-colors" />
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderProfileImages = (profiles: { name: string, image: string }[], section: string) => {
    if (activeSection !== section) return null;

    return (
      <ul className="mt-2 grid grid-cols-2 gap-4">
        {profiles.map((profile, index) => (
          <li key={index} className="flex flex-col items-center space-y-2">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-red-400"
            />
            <span className="text-sm text-gray-900">{profile.name}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className={`bg-white text-gray-900 h-screen p-4 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      } shadow-lg`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-xl mb-6 focus:outline-none hover:text-[#cc3300] transition-colors"
      >
        {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>

      <div className="space-y-4">
        {/* Upcoming Events */}
        <div
          onClick={() => handleSectionClick('events')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <FaRegCalendarAlt className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Events</span>
          )}
          {isOpen && (
            <FaPlus className="text-sm text-gray-300 hover:text-red-500 ml-auto cursor-pointer" />
          )}
        </div>
        {renderSectionItems(events, 'events')}

        {/* Contacts */}
        <div
          onClick={() => handleSectionClick('contacts')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <FaRegUser className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Contacts</span>
          )}
          {isOpen && (
            <FaPlus className="text-sm text-gray-300 hover:text-red-500 ml-auto cursor-pointer" />
          )}
        </div>
        {renderSectionItems(contacts, 'contacts')}

        {/* Projects */}
        <div
          onClick={() => handleSectionClick('projects')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <FaFolderOpen className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Projects</span>
          )}
          {isOpen && (
            <FaPlus className="text-sm text-gray-300 hover:text-red-500 ml-auto cursor-pointer" />
          )}
        </div>
        {renderSectionItems(projects, 'projects')}

        {/* Albums Section */}
        <div
          onClick={() => handleSectionClick('albums')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <FaRegImage className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Albums</span>
          )}
          {isOpen && (
            <FaPlus className="text-sm text-gray-300 hover:text-red-500 ml-auto cursor-pointer" />
          )}
        </div>
        {renderSectionItems([], 'albums')}

        {/* Organizations */}
        <div
          onClick={() => handleSectionClick('organizations')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <AiOutlineTeam className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Organizations</span>
          )}
          {isOpen && (
            <FaPlus className="text-sm text-gray-300 hover:text-red-500 ml-auto cursor-pointer" />
          )}
        </div>
        {renderSectionItems(organizations, 'organizations')}

        {/* Followers */}
        <div
          onClick={() => handleSectionClick('followers')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <AiOutlineTeam className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Followers</span>
          )}
        </div>
        {renderProfileImages(followers, 'followers')}

        {/* Following */}
        <div
          onClick={() => handleSectionClick('following')}
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <AiOutlineTeam className="text-2xl group-hover:text-[#cc3300] transition-all" />
          {isOpen && (
            <span className="group-hover:text-[#cc3300] transition-all">Following</span>
          )}
        </div>
        {renderProfileImages(following, 'following')}
      </div>
    </div>
  );
};

export default LeftColumn;
