import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const navLinks = [
    { name: 'HOME', link: '/', parent: null },
    { name: 'PORTFOLIO', link: '/list', parent: '/list' },
    { name: 'CONTACT ME', link: '/contact', parent: '/contact' },
  ];
  const [isClicked, setIsClicked] = useState(false);

  const onClickBurger = () => {
    if (isClicked) {
      document.querySelector('#hiddenLinks').classList.remove('show');
      setIsClicked(!isClicked);
    } else {
      document.querySelector('#hiddenLinks').classList.add('show');
      setIsClicked(!isClicked);
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">Adham</Link>
        <div className="links">
          {navLinks.map((nav) => (
            <Link className={window.location.pathname.includes(nav.parent) ? 'clicked' : 'link'} to={nav.link} key={nav.name}>{nav.name}</Link>
          ))}
        </div>
        <button type="button" className="burger" onClick={onClickBurger}>
          <RxHamburgerMenu />
        </button>
        <div id="hiddenLinks">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.name}>{nav.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
