import React from 'react';
import BeerCard from './BeerCard';

export const BeerList = ({ beers, loading }) => {
  if (loading) {
    return <h3>Please wait, loading data...</h3>;
  }

  return beers && beers.map(beer => <BeerCard beer={beer} />);
};
