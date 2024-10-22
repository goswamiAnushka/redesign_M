import React, { useState } from 'react';
import Newsfeed from './Newsfeed';
import TimelineFilters from './TimelineFilters';
// @ts-ignore
import EmojiPicker from 'emoji-picker-react';
import { FiPaperclip, FiCalendar, FiRefreshCw } from 'react-icons/fi';
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
  const [savedPosts, setSavedPosts] = useState<any[]>([]); // Store posts for the newsfeed

  const contacts = ['Contact 1', 'Contact 2', 'Contact 3'];

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

    // Save post to newsfeed
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
    console.log('Posted:', newPost);

    // Reset state
    setPostText('');
    setSelectedFile(null);
    setSelectedLocation('');
    setSelectedDate('');
    setContactsToTag([]);
    setProgressTracker({});
    setActivityTrackers({});
    setInteractionTrackers({});
    setImpactTrackers({});
    setError('');
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
    console.log('Filters applied:', { ...filters, ...newFilters });
  };

  const handleRefresh = () => {
    console.log('Refreshing updates...');
    // You can add any additional logic for refreshing here
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Reset error when changing tabs
    setError('');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Progress':
        return (
          <div>
            <h3 className="font-semibold mb-2">Progress Tracker</h3>
            {contactsToTag.map((contact) => (
              <div key={contact} className="flex items-center space-x-2 mb-2">
                <label>{contact}:</label>
                <input
                  type="text"
                  className="bg-white text-darkOrange border border-darkOrange rounded-lg p-2 shadow-lg transition-shadow duration-200 hover:shadow-xl"
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
            <h3 className="font-semibold mb-2">Activity Tracker</h3>
            {['Tracker 1', 'Tracker 2'].map((tracker) => (
              <div key={tracker} className="flex items-center space-x-2 mb-2">
                <label>{tracker}:</label>
                <input
                  type="number"
                  className="bg-white text-darkOrange border border-darkOrange rounded-lg p-2 shadow-lg transition-shadow duration-200 hover:shadow-xl"
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
            <h3 className="font-semibold mb-2">Attendance/Interactions Tracker</h3>
            {contactsToTag.map((contact) => (
              <div key={contact} className="flex items-center space-x-2 mb-2">
                <label>{contact}:</label>
                <input
                  type="checkbox"
                  className="bg-white text-darkOrange border border-darkOrange rounded-lg"
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
            <h3 className="font-semibold mb-2">Impact Tracker</h3>
            {['Achievement', 'Satisfaction'].map((tracker) => (
              <div key={tracker} className="flex items-center space-x-2 mb-2">
                <label>{tracker}:</label>
                <select
                  className="bg-white text-darkOrange border border-darkOrange rounded-lg p-2 shadow-lg transition-shadow duration-200 hover:shadow-xl"
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
  

  return (
    <div className="p-6 space-y-6 bg-gray-100 overflow-hidden"> 
      {/* Post Update Section */}
      <div className="mb-10">
        <h2 className="font-bold text-2xl mb-4">Share an Update</h2>
        <div className="relative">
          <textarea
            className="w-full border border-gray-500 rounded-lg p-2 h-24 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 shadow-md" // Reduced height and padding
            placeholder="Start typing in the Timeline Update..."
            maxLength={250}
            value={postText}
            onChange={handlePostChange}
          />
          <button
            className="absolute right-3 top-3 text-2xl hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            😊
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-12 left-0 z-10">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex space-x-4 mt-4">
        <label className="flex items-center">
  <span className="bg-blue-400 text-white p-1 rounded-md cursor-pointer flex items-center hover:bg-blue-500">
    <FiPaperclip className="mr-2" />
    Attach File
  </span>
  <input type="file" className="hidden" onChange={handleFileChange} />
</label>
          <div className="flex items-center">
            <FiCalendar className="mr-2" />
            <input
              type="date"
              className="bg-orange-400 text-white rounded-md p-1.5 text-sm"

              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-blue-600 text-black rounded-md p-1.5 text-sm hover:bg-green-500"


              placeholder="Location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            />
          </div>
          <button
           className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200"

            onClick={handlePostSubmit}
          >
            Post Update
          </button>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-col mt-4">
        <h3 className="font-semibold mb-2">Tag Contacts:</h3>
        <select
          className="bg-gray-700 text-white rounded-lg p-2 mb-2"
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              setContactsToTag((prev) => [...prev, value]);
              e.target.value = ''; // Reset the select input
            }
          }}
        >
          <option value="">Select a contact</option>
          {contacts.map((contact) => (
            <option key={contact} value={contact}>{contact}</option>
          ))}
        </select>
        <div className="mt-2">
          <p className="text-sm">Tagged Contacts: {contactsToTag.join(', ')}</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-around mt-4">
        <div className="flex items-center">
          <FaClipboardCheck className="mr-2" />
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'Progress' ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => handleTabChange('Progress')}
          >
            Progress
          </button>
        </div>
        <div className="flex items-center">
          <FaClipboardList className="mr-2" />
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'Activity' ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => handleTabChange('Activity')}
          >
            Activity
          </button>
        </div>
        <div className="flex items-center">
          <FaUserCheck className="mr-2" />
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'Interactions' ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => handleTabChange('Interactions')}
          >
            Interactions
          </button>
        </div>
        <div className="flex items-center">
          <FaChartLine className="mr-2" />
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'Impact' ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => handleTabChange('Impact')}
          >
            Impact
          </button>
        </div>
      </div>

      {/* Render Active Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>

      {/* Filter Section */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="flex items-center bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FiRefreshCw className="mr-2" />
          Filters
        </button>
        <div className="text-sm">
          <span className="text-yellow-300">Refresh to See Updates:</span>
          <button
            className="ml-2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>
      </div>
      {showFilters && (
        <TimelineFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      )}

      {/* Newsfeed Section */}
      <Newsfeed posts={savedPosts} filters={filters} />
    </div>
  );
};

export default MiddleColumn;