import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroPage from './routes/HeroPage';
import PortfolioPage from './routes/PortfolioPage';
import ContentPage from './routes/ContentPage';
import Contact from './routes/Contact';
import TextInput from './components/TextInput';

import './style/style.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/list" element={<PortfolioPage />} />
          <Route path="/list/:id" element={<ContentPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write" element={<TextInput />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
