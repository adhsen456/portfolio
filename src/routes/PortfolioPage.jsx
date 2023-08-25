import React from 'react';
import useFetch from '../data/populatePortfolios';
import Navbar from '../components/Navbar';
import PortfolioList from '../components/PortfolioList';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

function PortfolioPage() {
  const portfolios = useFetch();
  if (!portfolios) return <Loading />;
  return (
    <div>
      <Navbar />
      <PortfolioList portfolios={portfolios} />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
