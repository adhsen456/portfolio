import React from 'react';
import { FaArrowDown, FaArrowRight, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeroPage() {
  const content = {
    name: 'Adham Satria Firmansyah',
    desc: 'Hi, I am Adham. Fifth-year informatics student and currently doing my thesis. I have my interest in Machine Learning, Web Development, and Full Stack Development. I am a fast-learner and always loving to learn about everything interesting especially technology.',
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="name">{content.name}</div>
        <div className="desc">{content.desc}</div>
        <div className="buttons">
          <button type="button" className="download">
            <FaArrowDown />
            {' '}
            Download My CV
          </button>
          <a href="https://linkedin.com/in/adhamsf" target="_blank" type="button" className="download" rel="noreferrer">
            <FaLinkedinIn />
            {' '}
            Visit my LinkedIn Page
          </a>
          <Link to="/portfolio" className="portfolio">
            See my Portfolio
            {' '}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
