import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';

function PortfolioList({ portfolios }) {
  return (
    <div className="home">
      <div className="title">PORTFOLIO LIST</div>
      <div className="posts">
        {portfolios && portfolios.map((portfolio) => (
          <div className="post" key={portfolio.id}>
            <div className="img">
              <Link to={`/list/${portfolio.id}`}>
                <img src={portfolio.img} alt={portfolio.id} />
              </Link>
            </div>
            <div className="content">
              <Link to={`/list/${portfolio.id}`}>
                <h1>{portfolio.title}</h1>
              </Link>
              <p>{portfolio.description}</p>
              <Link to={`/list/${portfolio.id}`} className="button">Read More...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const portfolioShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

PortfolioList.propTypes = {
  portfolios: PropTypes.arrayOf(shape(portfolioShape)).isRequired,
};

export default PortfolioList;
