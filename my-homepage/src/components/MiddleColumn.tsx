import React from 'react';
import Newsfeed from './Newsfeed';
import TimelineFilters from './TimelineFilters';

const MiddleColumn: React.FC = () => {
  return (
    <div className="p-6">
      {/* Timeline Filters */}
      <TimelineFilters />

      {/* Calendar */}
      

      {/* Newsfeed */}
      <Newsfeed />
    </div>
  );
};

export default MiddleColumn;
