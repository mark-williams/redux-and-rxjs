import React from 'react';

export const BeerList = ({ beers }) => {
  return beers && beers.map(beer => <div key={beer.id}>{beer.name}</div>);
};
