import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navLinks = [
    { name: 'HOME', link: '/', parent: null },
    { name: 'PORTFOLIO', link: '/list', parent: '/list' },
    { name: 'CONTACT ME', link: '/contact', parent: '/contact' },
  ];
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">Adham Satria Firmansyah</Link>
        <div className="links">
          {navLinks.map((nav) => (
            <Link className={window.location.pathname.includes(nav.parent) ? 'clicked' : 'link'} to={nav.link} key={nav.name}>{nav.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
