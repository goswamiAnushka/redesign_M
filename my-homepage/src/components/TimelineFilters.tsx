import React, { useState } from 'react';

interface TimelineFiltersProps {
  filters: {
    organizations: boolean;
    projects: boolean;
    authors: boolean;
    labels: boolean;
    contacts: boolean;
    outcomes: boolean;
    progressTracker: boolean;
    surveys: boolean;
    dateHappened: string;
    datePosted: string;
  };
  onFilterChange: (newFilters: Partial<TimelineFiltersProps['filters']>) => void;
}

const TimelineFilters: React.FC<TimelineFiltersProps> = ({ filters, onFilterChange }) => {
  const [showDateHappenedOptions, setShowDateHappenedOptions] = useState(false);
  const [showDatePostedOptions, setShowDatePostedOptions] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onFilterChange({ [name]: checked });
  };

  const handleDateRangeSelect = (name: string, value: string) => {
    onFilterChange({ [name]: value });
  };

  const isDateValid = (dateString: string): boolean => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
    return datePattern.test(dateString);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-3">Filters</h3>

      {/* Filters */}
      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="organizations"
            checked={filters.organizations}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Organizations
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="projects"
            checked={filters.projects}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Projects
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="authors"
            checked={filters.authors}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Authors
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="labels"
            checked={filters.labels}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Labels
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="contacts"
            checked={filters.contacts}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Contacts
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="outcomes"
            checked={filters.outcomes}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Outcomes
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="progressTracker"
            checked={filters.progressTracker}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Progress Tracker
        </label>
        <label className="flex items-center cursor-pointer mb-1">
          <input
            type="checkbox"
            name="surveys"
            checked={filters.surveys}
            onChange={handleFilterChange}
            className="mr-1"
          />
          Surveys
        </label>
      </div>

      {/* Date Happened Filter */}
      <div className="mb-2">
        <label
          className="block cursor-pointer text-sm mb-1 text-gray-700 hover:text-blue-600"
          onClick={() => setShowDateHappenedOptions(!showDateHappenedOptions)}
        >
          Date Happened
        </label>
        {showDateHappenedOptions && (
          <div className="flex flex-col space-y-1 bg-gray-100 p-2 rounded-md">
            <div className="grid grid-cols-2 gap-1">
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('dateHappened', 'today')}
              >
                Today
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('dateHappened', 'yesterday')}
              >
                Yesterday
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('dateHappened', 'last7days')}
              >
                Last 7 Days
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('dateHappened', 'thisMonth')}
              >
                This Month
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('dateHappened', 'thisYear')}
              >
                This Year
              </button>
            </div>
            <input
              type="date"
              name="dateHappened"
              value={filters.dateHappened}
              onChange={(e) => {
                if (isDateValid(e.target.value)) {
                  onFilterChange({ dateHappened: e.target.value });
                } else {
                  alert('Please enter a valid date in YYYY-MM-DD format');
                }
              }}
              className="p-1 border rounded text-sm"
            />
          </div>
        )}
      </div>

      {/* Date Posted Filter */}
      <div>
        <label
          className="block cursor-pointer text-sm mb-1 text-gray-700 hover:text-blue-600"
          onClick={() => setShowDatePostedOptions(!showDatePostedOptions)}
        >
          Date Posted
        </label>
        {showDatePostedOptions && (
          <div className="flex flex-col space-y-1 bg-gray-100 p-2 rounded-md">
            <div className="grid grid-cols-2 gap-1">
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('datePosted', 'today')}
              >
                Today
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('datePosted', 'yesterday')}
              >
                Yesterday
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('datePosted', 'last7days')}
              >
                Last 7 Days
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('datePosted', 'thisMonth')}
              >
                This Month
              </button>
              <button
                className="block bg-white text-black text-sm hover:bg-blue-600 hover:text-white p-1 rounded transition"
                onClick={() => handleDateRangeSelect('datePosted', 'thisYear')}
              >
                This Year
              </button>
            </div>
            <input
              type="date"
              name="datePosted"
              value={filters.datePosted}
              onChange={(e) => {
                if (isDateValid(e.target.value)) {
                  onFilterChange({ datePosted: e.target.value });
                } else {
                  alert('Please enter a valid date in YYYY-MM-DD format');
                }
              }}
              className="p-1 border rounded text-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineFilters;
