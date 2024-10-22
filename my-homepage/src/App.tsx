import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import UpcomingEvents from './components/UpcomingEvents';
import ProjectShortcuts from './components/ProjectShortcuts';
import AlbumsShortcuts from './components/AlbumsShortcuts';
import ContactsShortcuts from './components/ContactShortcuts'; // Contacts

const App: React.FC = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-orange-400">Home</Link>
          </li>
          <li>
            <Link to="/events-shortcuts" className="text-white hover:text-orange-400">Upcoming Events</Link>
          </li>
          <li>
            <Link to="/projects-shortcuts" className="text-white hover:text-orange-400">Projects</Link>
          </li>
          <li>
            <Link to="/albums-shortcuts" className="text-white hover:text-orange-400">Albums</Link>
          </li>
          <li>
            <Link to="/contacts-shortcuts" className="text-white hover:text-orange-400">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events-shortcuts" element={<UpcomingEvents />} />
        <Route path="/projects-shortcuts" element={<ProjectShortcuts />} />
        <Route path="/albums-shortcuts" element={<AlbumsShortcuts />} />
        <Route path="/contacts-shortcuts" element={<ContactsShortcuts />} />
      </Routes>
    </Router>
  );
};

export default App;
