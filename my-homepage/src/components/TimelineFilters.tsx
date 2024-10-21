import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface TimelineFiltersProps {
  onFilterChange: (filters: any) => void; // callback to handle filter changes
}

const TimelineFilters: React.FC<TimelineFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    organizations: false,
    projects: false,
    authors: false,
    labels: false,
    contacts: false,
    outcomes: false,
    progressTracker: false,
    dateHappened: '', // to store the selected date or date range
  });

  const [startDate, setStartDate] = useState<Date | null>(null); // State for date picker
  const [showDatePicker, setShowDatePicker] = useState(false); // State to toggle date picker visibility

  const toggleFilter = (key: keyof typeof filters) => {
    const updatedFilters = { ...filters, [key]: !filters[key] };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Send updated filters to parent component
  };

  const handleDateFilter = (dateRange: string) => {
    const updatedFilters = { ...filters, dateHappened: dateRange };
    setFilters(updatedFilters);
    setStartDate(null); // Clear selected date when a range is chosen
    onFilterChange(updatedFilters); // Send updated filters to parent component
    setShowDatePicker(false); // Hide date picker when a date range is selected
  };

  const handleDateChange = (date: Date | null) => {
    const updatedFilters = { ...filters, dateHappened: date?.toISOString() || '' };
    setFilters(updatedFilters);
    setStartDate(date); // Set selected date
    onFilterChange(updatedFilters); // Send updated filters to parent component
  };

  const handleDateHappenedClick = () => {
    setShowDatePicker(!showDatePicker); // Toggle date picker visibility
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h3 className="font-bold mb-4">Select Filters:</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div onClick={() => toggleFilter('organizations')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.organizations ? 'bg-blue-200' : ''}`}>
          Organisations
        </div>
        <div onClick={() => toggleFilter('projects')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.projects ? 'bg-blue-200' : ''}`}>
          Projects
        </div>
        <div onClick={() => toggleFilter('authors')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.authors ? 'bg-blue-200' : ''}`}>
          Authors
        </div>
        <div onClick={() => toggleFilter('labels')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.labels ? 'bg-blue-200' : ''}`}>
          Labels
        </div>
        <div onClick={() => toggleFilter('contacts')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.contacts ? 'bg-blue-200' : ''}`}>
          Contacts
        </div>
        <div onClick={() => toggleFilter('outcomes')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.outcomes ? 'bg-blue-200' : ''}`}>
          Outcomes
        </div>
        <div onClick={() => toggleFilter('progressTracker')} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.progressTracker ? 'bg-blue-200' : ''}`}>
          Progress Tracker
        </div>
        
        {/* Date Happened Filter */}
        <div onClick={handleDateHappenedClick} className={`text-left py-2 cursor-pointer hover:bg-blue-600 transition duration-200 ${filters.dateHappened ? 'bg-blue-200' : ''}`}>
          Date Happened
        </div>
      </div>

      {showDatePicker && (
        <div className="mt-2">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            className="border rounded p-2 mb-2"
            placeholderText="Select a date"
          />
          <div className="flex flex-wrap space-x-4">
            <span onClick={() => handleDateFilter('today')} className="cursor-pointer text-blue-500 hover:underline">Today</span>
            <span onClick={() => handleDateFilter('yesterday')} className="cursor-pointer text-blue-500 hover:underline">Yesterday</span>
            <span onClick={() => handleDateFilter('next-day')} className="cursor-pointer text-blue-500 hover:underline">Next Day</span>
            <span onClick={() => handleDateFilter('this-week')} className="cursor-pointer text-blue-500 hover:underline">This Week</span>
            <span onClick={() => handleDateFilter('this-month')} className="cursor-pointer text-blue-500 hover:underline">This Month</span>
            <span onClick={() => handleDateFilter('3-months')} className="cursor-pointer text-blue-500 hover:underline">Last 3 Months</span>
            <span onClick={() => handleDateFilter('6-months')} className="cursor-pointer text-blue-500 hover:underline">Last 6 Months</span>
            <span onClick={() => handleDateFilter('this-year')} className="cursor-pointer text-blue-500 hover:underline">This Year</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineFilters;
