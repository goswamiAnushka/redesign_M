import React from 'react';
import ProgressBoard from './ProgressBoard';
import Tasks from './Tasks';

const RightColumn: React.FC = () => {
  return (
    <div className="space-y-6">
      <ProgressBoard />
      <Tasks />
    </div>
  );
};

export default RightColumn;
