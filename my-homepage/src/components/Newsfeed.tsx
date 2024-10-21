import React from 'react';

interface FilterOptions {
  organizations: boolean;
  projects: boolean;
  authors: boolean;
  labels: boolean;
  contacts: boolean;
  outcomes: boolean;
  progressTracker: boolean;
  dateHappened: string;
}

interface NewsfeedProps {
  filters: FilterOptions;
}

const Newsfeed: React.FC<NewsfeedProps> = ({ filters }) => {
  // Sample news items
  const newsItems = [
    { id: 1, title: 'Completed Project Alpha', date: '2024-10-18', type: 'project' },
    { id: 2, title: 'Started Sprint Planning', date: '2024-10-19', type: 'project' },
    { id: 3, title: 'New Partnership with XYZ Organization', date: '2024-10-20', type: 'organization' },
    { id: 4, title: 'Updated Contact List', date: '2024-10-21', type: 'contact' },
    { id: 5, title: 'Weekly Team Meeting Scheduled', date: '2024-10-22', type: 'outcome' },
  ];

  // Filter logic based on the applied filters
  const filteredNewsItems = newsItems.filter((item) => {
    const orgFilter = filters.organizations ? item.type === 'organization' : true;
    const projectFilter = filters.projects ? item.type === 'project' : true;
    const authorFilter = filters.authors ? item.type === 'author' : true;
    const labelFilter = filters.labels ? item.type === 'label' : true;
    const contactFilter = filters.contacts ? item.type === 'contact' : true;
    const outcomeFilter = filters.outcomes ? item.type === 'outcome' : true;
    const progressFilter = filters.progressTracker ? item.type === 'progress' : true;

    // Here, you can add additional filtering for date if needed
    let dateFilter = true;
    if (filters.dateHappened) {
      const today = new Date();
      const itemDate = new Date(item.date);
      // Example logic for filtering by date
      switch (filters.dateHappened) {
        case 'today':
          dateFilter = itemDate.toDateString() === today.toDateString();
          break;
        case 'previousDay':
          const previousDay = new Date();
          previousDay.setDate(today.getDate() - 1);
          dateFilter = itemDate.toDateString() === previousDay.toDateString();
          break;
        case 'nextDay':
          const nextDay = new Date();
          nextDay.setDate(today.getDate() + 1);
          dateFilter = itemDate.toDateString() === nextDay.toDateString();
          break;
        // Add more date conditions as necessary
        default:
          dateFilter = true;
      }
    }

    return orgFilter && projectFilter && authorFilter && labelFilter && 
           contactFilter && outcomeFilter && progressFilter && dateFilter;
  });

  return (
    <div className="mt-6">
      <h2 className="font-bold text-xl mb-4">Newsfeed</h2>
      <ul className="bg-gray-100 p-4 rounded-lg shadow">
        {filteredNewsItems.length > 0 ? (
          filteredNewsItems.map((item) => (
            <li key={item.id} className="mb-4 border-b pb-2 last:border-0">
              <span className="block font-semibold text-blue-600">{item.title}</span>
              <span className="block text-gray-400 text-sm">{item.date}</span>
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
