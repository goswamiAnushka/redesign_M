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
  filters: {
    organizations: boolean;
    projects: boolean;
    authors: boolean;
    labels: boolean;
    contacts: boolean;
    outcomes: boolean;
    progressTracker: boolean;
    dateHappened: string;
  };
}

const Newsfeed: React.FC<NewsfeedProps> = ({ posts, filters }) => {
  // Filter the posts based on the applied filters
  const filteredPosts = posts.filter((post) => {
    // Check if project filter is active and filter by project
    if (filters.projects && !post.project) return false;

    // Check if contacts filter is active and filter by tagged contacts
    if (filters.contacts && post.taggedContacts.length === 0) return false;

    // Add more filters as needed (e.g., authors, labels, outcomes, progressTracker)
    // Example: Filtering by date (optional filter logic based on dateHappened)
    if (filters.dateHappened && post.date !== filters.dateHappened) return false;

    return true; // If it passes all the active filters
  });

  return (
    <div className="mt-6">
      <h2 className="font-bold text-xl mb-4">Newsfeed</h2>
      <ul className="bg-gray-100 p-4 rounded-lg shadow">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <li key={index} className="mb-4 border-b pb-2 last:border-0">
              <span className="block font-semibold text-blue-600">{post.postText}</span>
              <span className="block text-gray-400 text-sm">{post.date}</span>
              <p className="text-gray-600">Project: {post.project}</p>
              <p className="text-gray-600">Location: {post.location}</p>
              <p className="text-gray-600">
                Tagged Contacts: {post.taggedContacts.join(', ') || 'None'}
              </p>
              {/* Display attached file if available */}
              {post.file && <p className="text-gray-600">Attached File: {post.file.name}</p>}
              {/* Optionally render additional post details (progress, activity, etc.) */}
            </li>
          ))
        ) : (
          <li className="text-gray-600">
            No news items to display based on the current filters.
          </li>
        )}
      </ul>
    </div>
  );
};

export default Newsfeed;
