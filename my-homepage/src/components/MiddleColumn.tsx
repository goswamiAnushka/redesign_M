import React, { useState } from 'react';
import Newsfeed from './Newsfeed';
import TimelineFilters from './TimelineFilters';
// @ts-ignore
import EmojiPicker from 'emoji-picker-react';
import { FiPaperclip, FiCalendar, FiRefreshCw, FiFilter } from 'react-icons/fi';
import { FaChartLine, FaClipboardList, FaUserCheck, FaClipboardCheck } from 'react-icons/fa';
import { BsFillPersonCheckFill } from 'react-icons/bs'; // Added for tagging contacts

const prohibitedWords = ['badword1', 'badword2', 'offensive'];

interface FilterOptions {
  organizations: boolean;
  projects: boolean;
  authors: boolean;
  labels: boolean;
  contacts: boolean;
  outcomes: boolean;
  progressTracker: boolean;
  dateHappened: string;
}

const MiddleColumn: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [error, setError] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    organizations: false,
    projects: false,
    authors: false,
    labels: false,
    contacts: false,
    outcomes: false,
    progressTracker: false,
    dateHappened: '',
  });
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [contactsToTag, setContactsToTag] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('Progress');
  const [progressTracker, setProgressTracker] = useState<{ [contact: string]: string }>({});
  const [activityTrackers, setActivityTrackers] = useState<{ [tracker: string]: number }>({});
  const [interactionTrackers, setInteractionTrackers] = useState<{ [contact: string]: boolean }>({});
  const [impactTrackers, setImpactTrackers] = useState<{ [tracker: string]: string }>({});
  const [savedPosts, setSavedPosts] = useState<any[]>([]);
  const [showPostDetails, setShowPostDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const contacts = ['Contact 1', 'Contact 2', 'Contact 3'];
  const projects = ['Project 1', 'Project 2', 'Project 3'];

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 250) {
      setError('Post cannot exceed 250 characters.');
    } else {
      setError('');
      setPostText(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setError('');
    }
  };

  const handlePostSubmit = () => {
    const trimmedText = postText.trim();

    if (!trimmedText && !selectedFile) {
      setError('Post cannot be empty. Add text or attach a file.');
      return;
    }

    if (trimmedText && trimmedText.length < 5) {
      setError('Post must be at least 5 characters long.');
      return;
    }

    const containsProhibited = prohibitedWords.some((word) =>
      trimmedText.toLowerCase().includes(word)
    );
    if (containsProhibited) {
      setError('Your post contains inappropriate content.');
      return;
    }

    // Show post details section for project/progress info
    setShowPostDetails(true);
  };

  const handleEmojiClick = (emoji: { emoji: string }) => {
    setPostText((prev) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setError('');
  };

  const handleProjectSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(e.target.value);
  };

  const handleRefresh = () => {
    console.log('Newsfeed refreshed');
    // Implement refresh logic if needed
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Progress':
        return (
          <div>
            <h3 className="font-semibold text-orange-600 mb-2">Progress Tracker</h3>
            {contactsToTag.map((contact) => (
              <div key={contact} className="flex items-center space-x-2 mb-2">
                <label>{contact}:</label>
                <input
                  type="text"
                  className="bg-white text-blue-600 border border-blue-600 rounded-lg p-2 shadow-lg transition-shadow duration-200 hover:shadow-xl"
                  value={progressTracker[contact] || ''}
                  onChange={(e) =>
                    setProgressTracker((prev) => ({ ...prev, [contact]: e.target.value }))
                  }
                />
              </div>
            ))}
          </div>
        );
      case 'Activity':
        return (
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Activity Tracker</h3>
            {['Tracker 1', 'Tracker 2'].map((tracker) => (
              <div key={tracker} className="flex items-center space-x-2 mb-2">
                <label>{tracker}:</label>
                <input
                  type="number"
                  className="bg-white text-green-600 border border-green-600 rounded-lg p-2 shadow-lg transition-shadow duration-200 hover:shadow-xl"
                  value={activityTrackers[tracker] || 0}
                  onChange={(e) =>
                    setActivityTrackers((prev) => ({ ...prev, [tracker]: +e.target.value }))
                  }
                />
              </div>
            ))}
          </div>
        );
      case 'Interactions':
        return (
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Attendance/Interactions Tracker</h3>
            {contactsToTag.map((contact) => (
              <div key={contact} className="flex items-center space-x-2 mb-2">
                <label>{contact}:</label>
                <input
                  type="checkbox"
                  className="bg-white text-blue-600 border border-blue-600 rounded-lg"
                  checked={interactionTrackers[contact] || false}
                  onChange={(e) =>
                    setInteractionTrackers((prev) => ({
                      ...prev,
                      [contact]: e.target.checked,
                    }))
                  }
                />
              </div>
            ))}
          </div>
        );
      case 'Impact':
        return (
          <div>
            <h3 className="font-semibold text-orange-600 mb-2">Impact Tracker</h3>
            {['Achievement', 'Satisfaction'].map((tracker) => (
              <div key={tracker} className="flex items-center space-x-2 mb-2">
                <label>{tracker}:</label>
                <select
                  className="bg-white text-orange-600 border border-orange-600 rounded-lg p-2 shadow-lg transition-shadow duration-200 hover:shadow-xl"
                  value={impactTrackers[tracker] || ''}
                  onChange={(e) =>
                    setImpactTrackers((prev) => ({ ...prev, [tracker]: e.target.value }))
                  }
                >
                  <option value="">Select</option>
                  <option value="Achieved">Achieved</option>
                  <option value="Not Achieved">Not Achieved</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const handleUpdate = () => {
    const newPost = {
      postText,
      file: selectedFile,
      location: selectedLocation,
      date: selectedDate,
      taggedContacts: contactsToTag,
      progressTracker,
      activityTrackers,
      interactionTrackers,
      impactTrackers,
    };
    setSavedPosts((prev) => [...prev, newPost]);

    // Reset state after updating
    setPostText('');
    setSelectedFile(null);
    setSelectedLocation('');
    setSelectedDate('');
    setContactsToTag([]);
    setProgressTracker({});
    setActivityTrackers({});
    setInteractionTrackers({});
    setImpactTrackers({});
    setShowPostDetails(false);
  };

  return (
    <div className="middle-column bg-white shadow-lg p-6 rounded-lg">
      {/* Post creation area */}
      <div className="post-section">
        <textarea
          value={postText}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
          className="post-textarea w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
        />
        <button
          onClick={handlePostSubmit}
          className="post-button bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-blue-600"
        >
          Post
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {/* Filter and Newsfeed section */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 mb-6 transition-transform duration-200 transform hover:scale-105 hover:bg-green-600 flex items-center space-x-2"
      >
        <FiFilter />
        <span>Filters</span>
      </button>

      {showFilters && <TimelineFilters filters={filters} onFilterChange={handleFilterChange} />}
      <Newsfeed posts={savedPosts} filters={filters} />

      {/* Post Details Section */}
      {showPostDetails && (
        <div className="post-details mt-6 p-4 border-t border-gray-200">
          <h4 className="font-bold text-lg mb-2">Post Details</h4>
          <select
            value={selectedProject}
            onChange={handleProjectSelection}
            className="bg-white border border-gray-300 rounded-lg p-2 mb-4"
          >
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>

          {selectedProject && (
            <div className="details-buttons space-x-4 mb-4">
              <button
                onClick={() => handleTabChange('Progress')}
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-orange-600"
              >
                Add Progress
              </button>
              <button className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-gray-600">
                <FiPaperclip />
                Attach File
              </button>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-green-600">
                <FaClipboardList />
                Add Location
              </button>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-blue-600">
                <FiCalendar />
                Add Date
              </button>
            </div>
          )}

          {contactsToTag.length > 0 && (
            <div className="additional-options flex space-x-4 mb-4">
              <button
                onClick={() => handleTabChange('Activity')}
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-green-600"
              >
                Activity
              </button>
              <button
                onClick={() => handleTabChange('Interactions')}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-blue-600"
              >
                Interaction
              </button>
              <button
                onClick={() => handleTabChange('Impact')}
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-orange-600"
              >
                Impact
              </button>
            </div>
          )}

          {renderTabContent()}

          <button
            onClick={handleUpdate}
            className="update-button bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-200 transform hover:scale-105 hover:bg-purple-600 mt-4"
          >
            Update
          </button>
        </div>
      )}

      <button
        onClick={handleRefresh}
        className="refresh-button bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg mt-6 transition-transform duration-200 transform hover:scale-105 hover:bg-gray-600 flex items-center space-x-2"
      >
        <FiRefreshCw />
        <span>Refresh</span>
      </button>
    </div>
  );
};

export default MiddleColumn;
