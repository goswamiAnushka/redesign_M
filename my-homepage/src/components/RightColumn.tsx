import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

// Dummy progress data
const progressData = [
  { label: 'Project Alpha', progress: 80, color: '#FF6B35' },
  { label: 'Project Beta', progress: 50, color: '#36A2EB' },
  { label: 'Task XYZ', progress: 30, color: '#4BC0C0' },
];

// Dummy boards data
const boardsData = [
  { name: 'Board 1', tasks: 5 },
  { name: 'Board 2', tasks: 3 },
  { name: 'Board 3', tasks: 8 },
  { name: 'Board 4', tasks: 2 },
];

const RightColumn: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  
  const [tasks, setTasks] = useState<{ title: string; completed: boolean }[]>([
    { title: 'Review project plan', completed: false },
    { title: 'Finalize design mockups', completed: false },
  ]);
  
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { title: taskInput, completed: false }]);
      setTaskInput('');
      updateCompletedTasksCount();
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    updateCompletedTasksCount();
  };

  const updateCompletedTasksCount = () => {
    const count = tasks.filter(task => task.completed).length;
    setCompletedTasksCount(count);
  };

  return (
    <div className="grid gap-6 p-6 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-lg font-sans">
      {/* Boards Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="mb-4">
          <h2 className="font-bold text-xl text-gray-800">Boards</h2>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex items-center mt-2 p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-transform transform hover:scale-105"
          >
            <FiPlus className="mr-1" /> New Board
          </button>
        </div>
        <ul className="list-disc pl-5 text-gray-600">
          {boardsData.map((board, index) => (
            <li key={index} className="hover:text-blue-500 transition duration-300">
              {board.name} - <span className="text-gray-500">{board.tasks} tasks</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Board Popup */}
      {isPopupOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Add New Board</h3>
            <input
              type="text"
              placeholder="Board Name"
              className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <button
              onClick={() => setIsPopupOpen(false)}
              className="bg-orange-600 text-white rounded-lg p-1.5 hover:bg-orange-700 transition"
            >
              Create
            </button>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="ml-2 text-gray-500 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Personal Progress Tracker */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="mb-4">
          <h2 className="font-bold text-lg text-gray-800">Personal Progress Tracker</h2>
          <button
            onClick={() => setShowProgress(!showProgress)}
            className="bg-blue-500 text-white text-sm rounded-lg px-2 py-1 hover:bg-blue-600 transition"
          >
            {showProgress ? 'Hide Progress' : 'Show Progress'}
          </button>
        </div>
        {showProgress && (
          <>
            {progressData.map((item, index) => (
              <div key={index} className="mb-4">
                <span className="font-semibold mr-2">{item.label}:</span>
                <div className="relative w-full bg-gray-200 rounded-full h-3 mx-2">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <span className="font-semibold text-gray-700">{item.progress}%</span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Tasks Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <h2 className="font-bold text-lg mb-2 text-gray-800">
          Tasks: <span className="text-blue-600">{completedTasksCount}</span> out of <span className="text-blue-600">{tasks.length}</span>
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task..."
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-orange-600 text-white rounded-lg p-1.5 hover:bg-orange-700 transition"
          >
            Add Task
          </button>
        </div>
        <button className="bg-gray-200 p-1 rounded-lg hover:bg-gray-300 text-sm">Filter</button>
        <div className="mt-4">
          <h2 className="font-bold text-lg mb-2 text-gray-800">To-Do List</h2>
          <ul className="list-disc pl-5 text-gray-600">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`p-2 rounded-md transition-colors duration-200 ${task.completed ? 'line-through text-gray-500' : 'hover:bg-gray-100'}`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                  className="mr-2"
                />
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
