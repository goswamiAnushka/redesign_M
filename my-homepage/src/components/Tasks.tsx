import React from 'react';

const Tasks: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Finish Dashboard UI', completed: false },
    { id: 2, title: 'Prepare for Meeting', completed: true },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow space-y-4">
      <h2 className="font-bold text-xl mb-4">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500"
            />
            <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
