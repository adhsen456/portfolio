import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroPage from './routes/HeroPage';
import PortfolioPage from './routes/PortfolioPage';
import ContentPage from './routes/ContentPage';
import TextInput from './components/TextInput';

import './style/style.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ContentPage />} />
          <Route path="/write" element={<TextInput />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
