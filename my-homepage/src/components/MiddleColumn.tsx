import React, { useState } from 'react';
import Newsfeed from './Newsfeed';
import TimelineFilters from './TimelineFilters';
// @ts-ignore
import EmojiPicker from 'emoji-picker-react';
import { FiPaperclip } from 'react-icons/fi'; // File attachment icon

const prohibitedWords = ['badword1', 'badword2', 'offensive'];

interface FilterOptions {
  organizations: boolean;
  projects: boolean;
  authors: boolean;
  labels: boolean;
  contacts: boolean;
  outcomes: boolean;
  progressTracker: boolean;
  dateHappened: string; // This can hold values like 'today', 'previousDay', etc.
}

const MiddleColumn: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [error, setError] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showFilters, setShowFilters] = useState(false); // State to manage filter dropdown
  const [filters, setFilters] = useState<FilterOptions>({
    organizations: false,
    projects: false,
    authors: false,
    labels: false,
    contacts: false,
    outcomes: false,
    progressTracker: false,
    dateHappened: '', // No date filter selected initially
  });

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

    // Validate for empty posts or only spaces
    if (!trimmedText && !selectedFile) {
      setError('Post cannot be empty. Add text or attach a file.');
      return;
    }

    // Validate for short length
    if (trimmedText && trimmedText.length < 5) {
      setError('Post must be at least 5 characters long.');
      return;
    }

    // Validate for prohibited words
    const containsProhibited = prohibitedWords.some((word) =>
      trimmedText.toLowerCase().includes(word)
    );
    if (containsProhibited) {
      setError('Your post contains inappropriate content.');
      return;
    }

    // If everything is valid
    console.log('Posted:', { postText, file: selectedFile });
    setPostText('');
    setSelectedFile(null);
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
    // Logic to filter newsfeed here based on `newFilters`
    console.log('Filters applied:', { ...filters, ...newFilters });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md max-w-2xl mx-auto"> {/* Increased padding */}
      {/* Post Update Section */}
      <div className="mb-8"> {/* Increased bottom margin */}
        <h2 className="font-semibold text-xl mb-3 text-gray-800">Share an Update</h2>
        <div className="relative">
        <textarea
  className="w-full border border-gray-300 rounded-lg p-4 h-24 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" // Increased height and padding
  placeholder="Share your progress"
  maxLength={250}
  value={postText}
  onChange={handlePostChange}
/>

          
          <button
            className="absolute right-3 top-3 text-2xl text-gray-500"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            😊
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-[-350px] left-0 z-10 shadow-lg bg-white rounded-lg">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        {/* Attach File */}
        <div className="mt-4 flex items-center space-x-4"> {/* Increased space between items */}
          <label className="cursor-pointer flex items-center space-x-2 text-blue-500 hover:text-blue-600">
            <FiPaperclip className="text-xl" />
            <span>Attach File</span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {selectedFile && (
            <span className="text-gray-700 text-sm">
              Attached: {selectedFile.name}
            </span>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
  className="mt-5 bg-blue-500 text-white rounded-full py-2 px-6 text-sm shadow-md"
  onClick={handlePostSubmit}
>
  Post
</button>

      </div>

      {/* Filters Section */}
      <div className="mb-6"> {/* Increased bottom margin */}
        <button
          className="text-blue-600 font-semibold"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        {showFilters && (
          <div className="mt-2 bg-white shadow rounded p-4">
            <TimelineFilters onFilterChange={handleFilterChange} />
          </div>
        )}
      </div>

      {/* Newsfeed */}
      <div className="mt-6">
        <Newsfeed filters={filters} />
      </div>
    </div>
  );
};

export default MiddleColumn;
