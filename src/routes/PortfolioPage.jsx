import React from 'react';
import useFetch from '../data/populatePortfolios';
import Navbar from '../components/Navbar';
import PortfolioList from '../components/PortfolioList';
import Footer from '../components/Footer';

function PortfolioPage() {
  const portfolios = useFetch();
  return (
    <div>
      <Navbar />
      <PortfolioList portfolios={portfolios} />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
