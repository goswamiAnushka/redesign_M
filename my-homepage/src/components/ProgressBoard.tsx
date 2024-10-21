import React from 'react';

const ProgressBoard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="font-bold text-xl mb-4">Progress Board</h2>
      <ul>
        <li className="mb-2">Project Alpha - 80%</li>
        <li className="mb-2">Project Beta - 50%</li>
        <li className="mb-2">Task XYZ - 30%</li>
      </ul>
    </div>
  );
};

export default ProgressBoard;
