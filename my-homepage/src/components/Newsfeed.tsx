import React from 'react';

interface NewsfeedProps {
  posts: Array<{
    postText: string;
    file: File | null;
    project: string;
    location: string;
    date: string;
    taggedContacts: string[];
    progressTracker: { [contact: string]: string };
    activityTrackers: { [tracker: string]: number };
    interactionTrackers: { [contact: string]: boolean };
    impactTrackers: { [tracker: string]: string };
  }>;
}

const Newsfeed: React.FC<NewsfeedProps> = ({ posts }) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-xl mb-4">Newsfeed</h2>
      <ul className="bg-gray-100 p-4 rounded-lg shadow">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <li key={index} className="mb-4 border-b pb-2 last:border-0">
              <span className="block font-semibold text-blue-600">{post.postText}</span>
              <span className="block text-gray-400 text-sm">{post.date}</span>
              <p className="text-gray-600">{post.project}</p>
              <p className="text-gray-600">{post.location}</p>
              <p className="text-gray-600">
                Tagged Contacts: {post.taggedContacts.join(', ')}
              </p>
              {/* Add logic to display file if exists */}
              {post.file && <p className="text-gray-600">Attached File: {post.file.name}</p>}
            </li>
          ))
        ) : (
          <li className="text-gray-600">No news items to display based on the current filters.</li>
        )}
      </ul>
    </div>
  );
};

export default Newsfeed;
