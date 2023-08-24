import React, { useRef } from 'react';
import './style/style.scss';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import HeroPage from './routes/HeroPage';
import PortfolioPage from './routes/PortfolioPage';
import ContentPage from './routes/ContentPage';
import TextInput from './components/TextInput';

function App() {
  const ref = useRef(null);

  return (
    <div className="app">
      <div className="container">
        <LoadingBar color="#689775" ref={ref} />
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
