import React from 'react';

const TimelineFilters: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="font-bold text-xl mb-4">Filters</h2>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Today
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          This Week
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          This Month
        </button>
      </div>
    </div>
  );
};

export default TimelineFilters;
