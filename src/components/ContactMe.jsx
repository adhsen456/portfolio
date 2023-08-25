import React from 'react';
import {
  FaEnvelope, FaLinkedinIn, FaWhatsapp, FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ContactMe() {
  const informations = [
    {
      name: 'Email', content: 'adhsen.firman@gmail.com', logo: <FaEnvelope />, link: 'mailto:adhsen.firman@gmail.com',
    },
    {
      name: 'LinkedIn', content: 'Adham Satria Firmansyah', logo: <FaLinkedinIn />, link: 'https://linkedin.com/in/adhamsf',
    },
    {
      name: 'WhatsApp', content: '+62 89668236692', logo: <FaWhatsapp />, link: 'https://wa.me/6289668236692',
    },
    {
      name: 'Github', content: 'adhsen456', logo: <FaGithub />, link: 'https://github.com/adhsen456',
    },
  ];
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
