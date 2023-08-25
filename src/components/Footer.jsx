import React from 'react';
import {
  FaEnvelope, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const informations = [
    {
      name: 'Email', content: 'adhsen.firman@gmail.com', logo: <FaEnvelope />, link: 'mailto:adhsen.firman@gmail.com',
    },
    {
      name: 'LinkedIn', content: 'Adham Satria Firmansyah', logo: <FaLinkedinIn />, link: 'https://linkedin.com/in/adhamsf',
    },
    {
      name: 'Github', content: 'adhsen456', logo: <FaGithub />, link: 'https://github.com/adhsen456',
    },
  ];
  return (
    <footer>
      <div className="reach">Reach Me Up Here</div>
      <div className="logos">
        {informations.map((information) => (
          <div className="logo" key={information.name}>
            {information.logo}
            <Link replace to={information.link} target="_blank">
              <span>{information.content}</span>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
