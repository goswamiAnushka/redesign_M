import React from 'react';

const Newsfeed: React.FC = () => {
  const newsItems = [
    { id: 1, title: 'Completed Project Alpha', date: '2024-10-18' },
    { id: 2, title: 'Started Sprint Planning', date: '2024-10-19' },
  ];

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Newsfeed</h2>
      <ul>
        {newsItems.map((item) => (
          <li key={item.id} className="mb-4">
            <span className="block font-bold">{item.title}</span>
            <span className="block text-gray-400">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newsfeed;
