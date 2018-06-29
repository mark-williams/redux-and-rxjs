import React from 'react';

export const BeerList = ({ beers, loading }) => {
  if (loading) {
    return <h3>Please wait, loading data...</h3>;
  }

  return beers && beers.map(beer => <div key={beer.id}>{beer.name}</div>);
};
