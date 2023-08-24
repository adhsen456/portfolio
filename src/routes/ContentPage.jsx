import React from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import useFetch from '../data/populatePortfolios';

function ContentPage() {
  const portfolios = useFetch();
  return (
    <div>
      <Navbar />
      <Content portfolios={portfolios} />
      <Footer />
    </div>
  );
}

export default ContentPage;
