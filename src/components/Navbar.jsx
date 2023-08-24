import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navLinks = [
    { name: 'HOME', link: '/', current: false },
    { name: 'PORTFOLIO', link: '/portfolio', current: false },
    { name: 'ABOUT ME', link: '/about', current: false },
    { name: 'CONTACT ME', link: '/contact', current: false },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">Adham Satria Firmansyah</Link>
        <div className="links">
          {navLinks.map((nav) => (
            <Link className="link" to={nav.link}>{nav.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
