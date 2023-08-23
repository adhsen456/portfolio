import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
  const navLinks = [
    { name: 'PORTFOLIO', link: '/portfolio', current: false },
    { name: 'ABOUT ME', link: '/about', current: false },
    { name: 'CONTACT ME', link: '/contact', current: false },
  ];
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">A S F</div>
        <div className="links">
          {navLinks.map((nav) => (
            <a className="link" href="/">{nav.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
