import React, { useState } from 'react';

interface Post {
  postText: string;
  file: File | null;
  project: string;
  location: string;
  dateHappened: string;
  datePosted: string;
  taggedContacts: string[];
}

interface NewsfeedProps {
  initialFilters: {
    organizations: boolean;
    projects: boolean;
    authors: boolean;
    labels: boolean;
    contacts: boolean;
    outcomes: boolean;
    progressTracker: boolean;
    surveys: boolean;
    dateHappened: string;
    datePosted: string;
  };
}

const Newsfeed: React.FC<NewsfeedProps> = ({ initialFilters }) => {
  const [filters, setFilters] = useState(initialFilters);

  // Updated dummy data with a range of dates for testing
  const dummyPosts: Post[] = [
    {
      postText: 'Completed initial research for the environmental impact project.',
      file: null,
      project: 'Environmental Impact',
      location: 'Mumbai, India',
      dateHappened: '2024-10-21',
      datePosted: '2024-10-21',
      taggedContacts: ['Rohan Sharma', 'Neha Verma'],
    },
    {
      postText: 'Held a successful fundraising event!',
      file: null,
      project: 'Fundraising',
      location: 'Delhi, India',
      dateHappened: '2024-10-20',
      datePosted: '2024-10-20',
      taggedContacts: ['Meera Kapoor'],
    },
    {
      postText: 'Launched the new website for our community outreach program.',
      file: null,
      project: 'Community Outreach',
      location: 'Bangalore, India',
      dateHappened: '2024-10-19',
      datePosted: '2024-10-19',
      taggedContacts: ['Rajesh Kumar'],
    },
    {
      postText: 'Organized a community clean-up event.',
      file: null,
      project: 'Community Development',
      location: 'Chennai, India',
      dateHappened: '2024-10-15',
      datePosted: '2024-10-16',
      taggedContacts: [],
    },
    {
      postText: 'Collaborated with local artists for a new mural project.',
      file: null,
      project: 'Art & Culture',
      location: 'Kolkata, India',
      dateHappened: '2024-09-30',
      datePosted: '2024-10-01',
      taggedContacts: ['Amit Das', 'Priya Sen'],
    },
    {
      postText: 'Visited schools to promote our educational programs.',
      file: null,
      project: 'Education',
      location: 'Hyderabad, India',
      dateHappened: '2024-10-10',
      datePosted: '2024-10-11',
      taggedContacts: ['Sita Mehta'],
    },
    {
      postText: 'Launched a new health awareness campaign.',
      file: null,
      project: 'Health',
      location: 'Pune, India',
      dateHappened: '2024-10-05',
      datePosted: '2024-10-06',
      taggedContacts: ['Ravi Desai'],
    },
  ];

  // Filter posts based on the applied filters
  const filteredPosts = dummyPosts.filter((post) => {
    if (filters.projects && !post.project) return false;
    if (filters.contacts && post.taggedContacts.length === 0) return false;
    if (filters.dateHappened && post.dateHappened !== filters.dateHappened) return false;
    if (filters.datePosted && post.datePosted !== filters.datePosted) return false;

    return true;
  });

  // Function to reset filters to no filters applied
  const refreshFilters = () => {
    setFilters({
      organizations: false,
      projects: false,
      authors: false,
      labels: false,
      contacts: false,
      outcomes: false,
      progressTracker: false,
      surveys: false,
      dateHappened: '',
      datePosted: '',
    });
  };

  return (
    <div className="mt-6">
      <h2 className="font-bold text-3xl text-orange-600 mb-6">Newsfeed</h2>
      {/* Refresh button */}
      <button
        onClick={refreshFilters}
        className="mb-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-200"
      >
        Clear Filters
      </button>
      {/* Scrollable container with modern styling */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-xl h-[30rem] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-thumb-rounded-full scrollbar-track-transparent transition-all duration-300 ease-in-out">
        <ul>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <li
                key={index}
                className="mb-4 p-4 transition-all duration-300 ease-in-out transform hover:scale-100 hover:bg-orange-100 rounded-lg border-b border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sdlP4jAq8B49ZK3UQg0aEiNiRdwNy_AmXH2CZ84YKjsnxwCdCtCCPngKyOq7grf78rw&usqp=CAU"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="block font-semibold text-blue-600">Anushka Goswami (You)</span>
                </div>
                <p className="block text-md font-semibold text-gray-800">{post.postText}</p>
                <div className="text-gray-500 text-xs mb-2">Date Happened: {post.dateHappened}</div>
                <div className="text-gray-500 text-xs mb-2">Date Posted: {post.datePosted}</div>
                <div className="flex items-center justify-between">
                  <p className="text-green-700 font-medium">Project: {post.project}</p>
                  <p className="text-blue-500">Location: {post.location}</p>
                </div>
                <p className="text-gray-600 text-xs mt-1">Tagged Contacts: {post.taggedContacts.join(', ') || 'None'}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-600">No news items to display based on the current filters.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Newsfeed;
