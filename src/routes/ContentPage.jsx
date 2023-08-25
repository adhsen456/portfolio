import React from 'react';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import useFetch from '../data/populatePortfolios';
import Loading from '../components/Loading';

function ContentPage() {
  const portfolios = useFetch();
  if (!portfolios) return <Loading />;
  return (
    <div>
      <Navbar />
      <Content portfolios={portfolios} />
      <Footer />
    </div>
  );
}

export default ContentPage;
