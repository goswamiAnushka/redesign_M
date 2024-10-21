import React from 'react';

const Tasks: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Finish Dashboard UI', completed: false },
    { id: 2, title: 'Prepare for Meeting', completed: true },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="font-bold text-xl mb-4">Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <input type="checkbox" checked={task.completed} className="mr-2" />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
