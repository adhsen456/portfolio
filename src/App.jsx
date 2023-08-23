import React from 'react';
import './style/style.scss';
// import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <HomePage />
        {/* <Routes> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* </Routes> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
