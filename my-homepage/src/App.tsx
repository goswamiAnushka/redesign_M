import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UpcomingEvents from './components/UpcomingEvents';
import ProjectShortcuts from './components/ProjectShortcuts';
import AlbumsShortcuts from './components/AlbumsShortcuts';
import ContactsShortcuts from './components/ContactShortcuts'; // Contacts


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events-shortcuts" element={<UpcomingEvents />} />
        <Route path="/projects-shortcuts" element={<ProjectShortcuts />} />
        <Route path="/albums-shortcuts" element={<AlbumsShortcuts />} />
        <Route path="/contacts-shortcuts" element={<ContactsShortcuts />} /> {/* Updated route */}
        
      </Routes>
    </Router>
  );
};

export default App;