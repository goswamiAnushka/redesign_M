import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { BsPlusCircle } from 'react-icons/bs';
import { FaArrowDown } from 'react-icons/fa';

const progressData = [
  { label: 'Project Alpha', progress: 80, color: '#FF6B35' },
  { label: 'Project Beta', progress: 50, color: '#36A2EB' },
  { label: 'Task XYZ', progress: 30, color: '#4BC0C0' },
];

const initialBoardsData = [
  { name: 'Board 1', tasks: 5 },
  { name: 'Board 2', tasks: 3 },
  { name: 'Board 3', tasks: 8 },
  { name: 'Board 4', tasks: 2 },
];

const RightColumn: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([
    { title: 'Review project plan', completed: false },
    { title: 'Finalize design mockups', completed: false },
  ]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [boards, setBoards] = useState(initialBoardsData);
  const [newBoardName, setNewBoardName] = useState('');

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

  const handleCreateBoard = () => {
    if (newBoardName.trim()) {
      setBoards([...boards, { name: newBoardName, tasks: 0 }]);
      setNewBoardName('');
      setIsPopupOpen(false);
    }
  };

  return (
    <div className="grid gap-6 p-5 bg-gradient-to-b from-gray-50 to-white rounded-lg shadow-lg font-sans">
      {/* Boards Section */}
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-bold text-xl text-gray-800">Boards</h2>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex items-center px-2 py-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg hover:from-orange-500 hover:to-orange-700 transition-transform transform hover:scale-105 text-sm"
          >
            <FiPlus className="mr-1" /> New Board
          </button>
        </div>
        <ul className="list-disc pl-5 text-gray-600">
          {boards.map((board, index) => (
            <li key={index} className="hover:text-blue-500 transition duration-300 flex items-center">
              <img 
                src="https://www.pinclipart.com/picdir/big/308-3089911_default-clipart.png" 
                alt="Board Icon" 
                className="w-5 h-5 mr-2" // Adjust size here
              />
              {board.name} - <span className="text-gray-500">{board.tasks} tasks</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Board Popup */}
      {isPopupOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="font-bold text-lg mb-4">Add New Board</h3>
            <input
              type="text"
              value={newBoardName}
              onChange={(e) => setNewBoardName(e.target.value)}
              placeholder="Board Name"
              className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={handleCreateBoard}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg px-4 py-2 hover:from-orange-500 hover:to-orange-700 transition text-sm"
              >
                Create
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="ml-2 text-gray-500 text-sm hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Personal Progress Tracker */}
      <div className="bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-800">Personal Progress Tracker</h2>
          <button
            onClick={() => setShowProgress(!showProgress)}
            className="p-1 rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowDown className={`transform ${showProgress ? 'rotate-180' : ''} text-orange-500`} />
          </button>
        </div>
        {showProgress && (
          <>
            {progressData.map((item, index) => (
              <div key={index} className="mb-4 flex items-center justify-between">
                <span className="font-semibold">{item.label}:</span>
                <div className="relative w-full mx-2 flex items-center">
                  <div className="relative w-full bg-gray-200 rounded-full h-3 flex items-center">
                    <div
                      className="h-3 rounded-full transition-all duration-300"
                      style={{
                        width: `${item.progress}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <span className="font-semibold text-gray-700 ml-2">{item.progress}%</span>
                  <BsPlusCircle className="text-white bg-gray-800 rounded-full p-1 ml-2 transition-transform hover:scale-110" />
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Tasks Section */}
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-blue-500">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="font-bold text-lg mb-2 text-gray-800">
            Tasks: <span className="text-blue-600">{completedTasksCount}</span> out of <span className="text-blue-600">{tasks.length}</span>
          </h2>
          <button
            onClick={() => setShowTasks(!showTasks)}
            className="p-1 rounded-full hover:bg-gray-200 transition"
          >
            <FaArrowDown className={`transform ${showTasks ? 'rotate-180' : ''} text-green-500`} />
          </button>
        </div>
        {showTasks && (
          <>
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
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg px-4 py-2 hover:from-orange-500 hover:to-orange-700 transition text-sm"
              >
                Add Task
              </button>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg mb-2 text-gray-800">To-Do List</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      task.completed ? 'line-through text-gray-500' : 'hover:bg-gray-100 hover:bg-opacity-75'
                    }`}
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
          </>
        )}
      </div>
    </div>
  );
};

export default RightColumn;
