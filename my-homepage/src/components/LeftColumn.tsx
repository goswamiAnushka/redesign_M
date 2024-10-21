import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPlus, FaCog } from 'react-icons/fa';
import { AiOutlineCalendar, AiOutlineContacts, AiOutlineProject, AiOutlineFileImage, AiOutlineTeam } from 'react-icons/ai';
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
  const peopleYouMayKnow = ['Person 1', 'Person 2', 'Person 3', 'Person 4']; // Anonymous placeholders for People You May Know

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
                {section === 'peopleYouMayKnow' ? (
                  <div className="h-8 w-8 rounded-full bg-gray-500" /> // Anonymous circular placeholder
                ) : (
                  <AiOutlineTeam className="text-lg text-indigo-400" />
                )}
                {section !== 'peopleYouMayKnow' && <span>{item}</span>}
              </div>
              {section !== 'peopleYouMayKnow' && <FaCog className="text-gray-400 hover:text-white transition-colors" />}
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
          <AiOutlineCalendar className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Events</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(events, 'events')}

        {/* Contacts */}
        <div onClick={() => handleSectionClick('contacts')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineContacts className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Contacts</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(contacts, 'contacts')}

        {/* Projects */}
        <div onClick={() => handleSectionClick('projects')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineProject className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Projects</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(projects, 'projects')}

        {/* Organizations */}
        <div onClick={() => handleSectionClick('organizations')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineTeam className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Organizations</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(organizations, 'organizations')}

        {/* People You May Know */}
        <div onClick={() => handleSectionClick('peopleYouMayKnow')} className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineTeam className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">People You May Know</span>}
          {isOpen && <FaPlus className="text-sm text-gray-300 hover:text-white ml-auto cursor-pointer" />}
        </div>
        {renderSectionItems(peopleYouMayKnow, 'peopleYouMayKnow')}

        {/* Albums */}
        <Link to="/albums-shortcuts" className="flex items-center space-x-4 group cursor-pointer">
          <AiOutlineFileImage className="text-2xl group-hover:text-indigo-400 transition-all" />
          {isOpen && <span className="group-hover:text-indigo-400 transition-all">Albums</span>}
        </Link>
      </div>
    </div>
  );
};

export default LeftColumn;
