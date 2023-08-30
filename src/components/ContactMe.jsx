import React from 'react';
import { Link } from 'react-router-dom';
import { informations } from './Footer';

function ContactMe() {
  return (
    <div className="contact">
      <span className="title">CONTACT ME</span>
      <div className="links">
        {informations.map((information) => (
          <Link replace to={information.link} className={`link ${information.name}`} key={information.name}>
            <div className="logo">{information.logo}</div>
            <span>{information.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
