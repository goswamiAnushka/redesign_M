import React, { useState } from 'react';
import Newsfeed from './Newsfeed';
import TimelineFilters from './TimelineFilters';
// @ts-ignore
import EmojiPicker from 'emoji-picker-react';
import { FiPaperclip, FiRefreshCw, FiFilter, FiMapPin } from 'react-icons/fi';
import { FaTasks, FaClipboardList } from 'react-icons/fa';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import DatePicker from 'react-datepicker'; // Date picker library
import 'react-datepicker/dist/react-datepicker.css';

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
  const [postText, setPostText] = useState(''); // Set to empty string
  const [error, setError] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    organizations: false,
    projects: false,
    authors: false,
    labels: false,
    contacts: false,
    outcomes: false,
    progressTracker: false,
    surveys: false,
    dateHappened: '',
    datePosted: ''
});

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Use DatePicker
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

  

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Progress':
        return (
          <div className="p-4 rounded-md border bg-orange-100">
            <h3 className="font-semibold text-orange-600 mb-2">Progress Tracker</h3>
            {contactsToTag.map((contact) => (
              <div key={contact} className="flex items-center space-x-2 mb-2">
                <label className="font-semibold text-gray-700">{contact}:</label>
                <input
                  type="text"
                  className="bg-white border border-orange-400 rounded-lg p-2 shadow-md focus:ring-orange-500"
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
          <div className="p-4 rounded-md border bg-green-100">
            <h3 className="font-semibold text-green-600 mb-2">Activity Tracker</h3>
            {['Tracker 1', 'Tracker 2'].map((tracker) => (
              <div key={tracker} className="flex items-center space-x-2 mb-2">
                <label className="font-semibold text-gray-700">{tracker}:</label>
                <input
                  type="number"
                  className="bg-white border border-green-400 rounded-lg p-2 shadow-md focus:ring-green-500"
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
          <div className="p-4 rounded-md border bg-blue-100">
            <h3 className="font-semibold text-blue-600 mb-2">Attendance/Interactions Tracker</h3>
            {contactsToTag.map((contact) => (
              <div key={contact} className="flex items-center space-x-2 mb-2">
                <label className="font-semibold text-gray-700">{contact}:</label>
                <input
                  type="checkbox"
                  className="bg-white border border-blue-400 rounded-lg focus:ring-blue-500"
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
          <div className="p-4 rounded-md border bg-yellow-100">
            <h3 className="font-semibold text-yellow-600 mb-2">Impact Tracker</h3>
            {['Achievement', 'Satisfaction'].map((tracker) => (
              <div key={tracker} className="flex items-center space-x-2 mb-2">
                <label className="font-semibold text-gray-700">{tracker}:</label>
                <select
                  className="bg-white border border-yellow-400 rounded-lg p-2 shadow-md focus:ring-yellow-500"
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
      date: selectedDate?.toLocaleDateString() || '',
      taggedContacts: contactsToTag,
      progressTracker,
      activityTrackers,
      interactionTrackers,
      impactTrackers,
    };
    setSavedPosts((prev) => [...prev, newPost]);

    // Reset state after updating
    setPostText('Share progress...');
    setSelectedFile(null);
    setContactsToTag([]);
    setProgressTracker({});
    setActivityTrackers({});
    setInteractionTrackers({});
    setImpactTrackers({});
    setShowPostDetails(false);
    setSelectedLocation('');
    setSelectedDate(null);
    setError('');
  };

  return (
    <div className="flex-grow p-4 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="mb-4">
        <div className="flex flex-wrap items-center space-x-3 space-y-3 sm:space-y-0 mb-3">
          <textarea
            value={postText}
            onChange={handlePostChange}
            placeholder="Share progress..."
            className="flex-grow border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out sm:max-w-xs lg:max-w-lg"
            style={{ height: "3rem" }} 
          />
          <div className="relative flex items-center">
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="px-2 py-1 bg-yellow-200 text-yellow-700 rounded-full shadow-sm transition hover:bg-yellow-300 text-sm sm:text-base"
            >
              😊
            </button>
            {showEmojiPicker && (
              <div className="absolute top-8 z-10 shadow-md bg-white rounded-lg">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="px-3 py-1 bg-blue-200 text-blue-700 rounded-full shadow-sm cursor-pointer transition hover:bg-blue-300 text-sm sm:text-base"
          >
            <FiPaperclip className="inline-block text-lg" />
          </label>
          <button
            onClick={() => setSelectedLocation('')}
            className="px-3 py-1 bg-green-200 text-green-700 rounded-full shadow-sm transition hover:bg-green-300 text-sm sm:text-base"
          >
            <FiMapPin className="inline-block text-lg" />
          </button>
        </div>
  
        {selectedLocation !== '' && (
          <input
            type="text"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            placeholder="Type location"
            className="w-full mt-1 p-2 border border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-200 ease-in-out sm:max-w-xs lg:max-w-lg"
          />
        )}
  
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select date"
          className="px-3 py-2 mt-2 bg-red-100 text-red-700 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-200 ease-in-out w-full sm:w-auto"
        />
  
        <button
          onClick={handlePostSubmit}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition w-full sm:w-auto text-sm sm:text-base"
        >
          Post
        </button>
  
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
  
      {showPostDetails && (
        <div className="border-t mt-4 pt-4">
          <h2 className="font-bold text-lg mb-3">Provide details for your post</h2>
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Tag Contacts:</label>
            <div className="flex flex-wrap space-x-1 mt-1">
              {contacts.map((contact) => (
                <button
                  key={contact}
                  onClick={() =>
                    setContactsToTag((prev) =>
                      prev.includes(contact)
                        ? prev.filter((c) => c !== contact)
                        : [...prev, contact]
                    )
                  }
                  className={`px-2 py-1 rounded-full shadow-sm transition duration-200 text-sm sm:text-base ${
                    contactsToTag.includes(contact)
                      ? 'bg-blue-200 text-blue-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {contact}
                </button>
              ))}
            </div>
          </div>
  
          <div className="mb-4">
            <label className="font-semibold text-gray-700">Select Project:</label>
            <select
              value={selectedProject}
              onChange={handleProjectSelection}
              className="w-full bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out text-sm sm:text-base"
            >
              <option value="">Select a project</option>
              {projects.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </div>
  
          <div className="mb-4">
            <div className="flex flex-wrap space-x-3">
              <button
                onClick={() => handleTabChange('Progress')}
                className={`px-4 py-2 rounded-lg shadow-sm transition duration-200 text-sm sm:text-base ${
                  activeTab === 'Progress'
                    ? 'bg-orange-300 text-orange-800'
                    : 'bg-gray-200'
                }`}
              >
                <FaTasks className="inline-block mr-1" />
                Progress
              </button>
              <button
                onClick={() => handleTabChange('Activity')}
                className={`px-4 py-2 rounded-lg shadow-sm transition duration-200 text-sm sm:text-base ${
                  activeTab === 'Activity' ? 'bg-green-300 text-green-800' : 'bg-gray-200'
                }`}
              >
                <FaClipboardList className="inline-block mr-1" />
                Activity
              </button>
              <button
                onClick={() => handleTabChange('Interactions')}
                className={`px-4 py-2 rounded-lg shadow-sm transition duration-200 text-sm sm:text-base ${
                  activeTab === 'Interactions'
                    ? 'bg-blue-300 text-blue-800'
                    : 'bg-gray-200'
                }`}
              >
                <BsFillPersonCheckFill className="inline-block mr-1" />
                Interactions
              </button>
              <button
                onClick={() => handleTabChange('Impact')}
                className={`px-4 py-2 rounded-lg shadow-sm transition duration-200 text-sm sm:text-base ${
                  activeTab === 'Impact' ? 'bg-yellow-300 text-yellow-800' : 'bg-gray-200'
                }`}
              >
                <FiRefreshCw className="inline-block mr-1" />
                Impact
              </button>
            </div>
          </div>
  
          {renderTabContent()}
  
          <button
            onClick={handleUpdate}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition w-full sm:w-auto text-sm sm:text-base"
          >
            Update
          </button>
        </div>
      )}
  
      <div className="mt-8">
        <div className="mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm flex items-center hover:bg-gray-300 transition text-sm sm:text-base"
          >
            <FiFilter className="mr-1 text-lg" /> Filter Newsfeed
          </button>
        </div>
        {showFilters && (
          <div className="mb-4">
            <TimelineFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>
        )}
        <Newsfeed initialFilters={filters} />
      </div>
    </div>
  );
  
};  
export default MiddleColumn;
