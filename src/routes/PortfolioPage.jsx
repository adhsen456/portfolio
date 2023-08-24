import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioList from '../components/PortfolioList';
import Footer from '../components/Footer';
import useFetch from '../data/populatePortfolios';

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
