import React from 'react';

interface TimelineFiltersProps {
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
  onChange: (newFilters: Partial<TimelineFiltersProps['filters']>) => void;
}

const TimelineFilters: React.FC<TimelineFiltersProps> = ({ filters, onChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-2">Filters</h3>
      <label>
        <input
          type="checkbox"
          name="organizations"
          checked={filters.organizations}
          onChange={handleFilterChange}
        />
        Organizations
      </label>
      <label>
        <input
          type="checkbox"
          name="projects"
          checked={filters.projects}
          onChange={handleFilterChange}
        />
        Projects
      </label>
      <label>
        <input
          type="checkbox"
          name="authors"
          checked={filters.authors}
          onChange={handleFilterChange}
        />
        Authors
      </label>
      <label>
        <input
          type="checkbox"
          name="labels"
          checked={filters.labels}
          onChange={handleFilterChange}
        />
        Labels
      </label>
      <label>
        <input
          type="checkbox"
          name="contacts"
          checked={filters.contacts}
          onChange={handleFilterChange}
        />
        Contacts
      </label>
      <label>
        <input
          type="checkbox"
          name="outcomes"
          checked={filters.outcomes}
          onChange={handleFilterChange}
        />
        Outcomes
      </label>
      <label>
        <input
          type="checkbox"
          name="progressTracker"
          checked={filters.progressTracker}
          onChange={handleFilterChange}
        />
        Progress Tracker
      </label>
      <label>
        <input
          type="date"
          name="dateHappened"
          value={filters.dateHappened}
          onChange={(e) => onChange({ dateHappened: e.target.value })}
        />
        Date Happened
      </label>
    </div>
  );
};

export default TimelineFilters;
