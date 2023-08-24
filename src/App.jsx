import React from 'react';
import './style/style.scss';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Footer from './components/Footer';
import HeroPage from './routes/HeroPage';
import PortfolioPage from './routes/PortfolioPage';
import ContentPage from './routes/ContentPage';
import TextInput from './components/TextInput';

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
        {/* <HeroPage /> */}
        {/* <Navbar />
        <HomePage /> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* </Routes> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
