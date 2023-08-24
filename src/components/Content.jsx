// import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes, { shape } from 'prop-types';

function Content({ portfolios }) {
  const { id } = useParams();

  const thisPortfolio = portfolios.find((portfolio) => portfolio.id == id);
  const otherPortfolios = portfolios.filter((portfolio) => portfolio.id != id);

  return (
    <div className="content">
      <div className="container">
        {thisPortfolio
        && (
        <div className="main">
          <img src={thisPortfolio.img} alt="" />
          <span className="title">{thisPortfolio.title}</span>
          <span className="desc">{parse(thisPortfolio.content)}</span>
        </div>
        )}
        {otherPortfolios
        && (
        <div className="side">
          <span>OTHER PORTFOLIO</span>
          {otherPortfolios.map((portfolio) => (
            <div className="other" key={portfolio.id}>
              <div className="img">
                <Link replace to={`/list/${portfolio.id}`}>
                  <img src={portfolio.img} alt="" />
                </Link>
              </div>
              <Link replace to={`/list/${portfolio.id}`} className="title">{portfolio.title}</Link>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

const portfolioShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

Content.propTypes = {
  portfolios: PropTypes.arrayOf(shape(portfolioShape)).isRequired,
};

export default Content;
