import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPlus, FaCog, FaFolderOpen, FaRegCalendarAlt, FaRegUser, FaRegImage } from 'react-icons/fa'; // Added more icons
import { AiOutlineContacts, AiOutlineTeam } from 'react-icons/ai'; // Keeping the relevant icons
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
  const peopleYouMayKnow = ['Person 1', 'Person 2'];
  const followers = ['Follower 1', 'Follower 2'];
  const following = ['Following 1', 'Following 2'];

  // Function to toggle the active section
  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Render section items only if the section is active
  const renderSectionItems = (items: string[], section: string) => {
    if (activeSection !== section) return null;

    return (
      <>
        <ul className="mt-2 space-y-2">
          {items.slice(0, 2).map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-all"
            >
              <div className="flex items-center space-x-2">
                {['peopleYouMayKnow', 'followers', 'following'].includes(section) ? (
                  <div className="h-8 w-8 rounded-full bg-gray-500" /> // Circular placeholder for people
                ) : (
                  section === 'projects' ? <FaFolderOpen className="text-lg text-indigo-400" /> : // Folder icon for Projects
                  section === 'events' ? <FaRegCalendarAlt className="text-lg text-indigo-400" /> : // Calendar icon for Events
                  section === 'contacts' ? <FaRegUser className="text-lg text-indigo-400" /> :  // User icon for Contacts
                  section === 'albums' ? <FaRegImage className="text-lg text-indigo-400" /> : // Image icon for Albums
                  <AiOutlineTeam className="text-lg text-indigo-400" /> // Team icon for others
                )}
                <span>{item}</span>
              </div>
              {section !== 'peopleYouMayKnow' && section !== 'followers' && section !== 'following' && (
                <FaCog className="text-gray-400 hover:text-white transition-colors" />
              )}
            </li>
          ))}
        </ul>
        <Link to={`/${section}-shortcuts`} className="text-indigo-400 hover:underline mt-4 block">
          See All
        </Link>
      </>
    );
  };

  return (
    <div className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="text-xl mb-6 focus:outline-none hover:text-indigo-400 transition-colors">
        {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>

      <div className="space-y-4">
        {/* Upcoming Events */}
        <div onClick={() => handleSectionClick('events')} className="flex items-center space-x-4 group cursor-pointer">
          <FaRegCalendarAlt className="text-2xl group-hover:text-indigo-400 transition-all" /> {/* Updated icon */}
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Events</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(events, 'events')}

        {/* Contacts */}
        <div onClick={() => handleSectionClick('contacts')} className="flex items-center space-x-4 group cursor-pointer">
          <FaRegUser className="text-2xl group-hover:text-indigo-400 transition-all" /> {/* Updated icon */}
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Contacts</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(contacts, 'contacts')}

        {/* Projects */}
        <div onClick={() => handleSectionClick('projects')} className="flex items-center space-x-4 group cursor-pointer">
          <FaFolderOpen className="text-2xl group-hover:text-indigo-400 transition-all" /> {/* Updated icon */}
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Projects</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(projects, 'projects')}

        {/* Albums */}
        <Link to="/albums-shortcuts" className="flex items-center space-x-4 group cursor-pointer">
          <FaRegImage className="text-2xl group-hover:text-indigo-400 transition-all" /> {/* Albums Icon */}
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Albums</span>}
        </Link>

        {/* Organizations */}
        <div onClick={() => handleSectionClick('organizations')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineTeam className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Organizations</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(organizations, 'organizations')}


        {/* Followers */}
        <div onClick={() => handleSectionClick('followers')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineTeam className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Followers</span>}
        </div>
        {renderSectionItems(followers, 'followers')}

        {/* Following */}
        <div onClick={() => handleSectionClick('following')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineTeam className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Following</span>}
        </div>
        {renderSectionItems(following, 'following')}
      </div>
    </div>
  );
};

export default LeftColumn;
