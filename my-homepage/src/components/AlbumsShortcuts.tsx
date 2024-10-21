import React from 'react';

const AlbumsShortcuts: React.FC = () => {
  const albums = ['Summer 2023', 'Company Retreat', 'Holiday Photos'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mt-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Albums</h2>
      <ul className="space-y-2">
        {albums.map((album, index) => (
          <li key={index} className="p-2 rounded-md bg-gray-100 hover:bg-indigo-100">
            <p className="text-lg font-semibold">{album}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsShortcuts;
